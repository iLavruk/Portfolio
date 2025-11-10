import { useEffect, useRef, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const activeRef = useRef<string | null>(null)
  useEffect(() => { activeRef.current = active }, [active])

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null) 

    if (!elements.length) return

    const topId = ids[0]

    const observer = new IntersectionObserver(
      (entries) => {
        const topEntry = entries.find((e) => (e.target as HTMLElement).id === topId)
        if (topEntry?.isIntersecting) {
          if (activeRef.current !== topId) setActive(topId)
          return
        }

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          const id = (visible[0].target as HTMLElement).id
          if (activeRef.current !== id) setActive(id)
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -70% 0px', 
        threshold: 0.1,
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.slice(1)
      if (ids.includes(h)) setActive(h)
    }

    window.addEventListener('hashchange', onHash)
    onHash()

    return () => window.removeEventListener('hashchange', onHash)
  }, [ids])

  return active
}