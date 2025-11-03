import { useEffect, useMemo, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null)
  const targets = useMemo(() => ids.map((id) => document.getElementById(id)).filter(Boolean) as Element[], [ids])

  useEffect(() => {
    if (!targets.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive((visible[0].target as HTMLElement).id)
      },
      {
        root: null,
        rootMargin: '0px 0px -60% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75, 1],
      },
    )
    targets.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [targets])

  return active
}

