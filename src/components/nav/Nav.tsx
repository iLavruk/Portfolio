import { NAV_ITEMS } from '@constants'
import { SectionId } from '@lib/constants/sections.constant'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import styles from './nav.module.css'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

export default function Nav() {
  const ids = [SectionId.home, ...NAV_ITEMS.map((n) => n.id)]
  const active = useActiveSection(ids)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const onChange = (e: MediaQueryListEvent) => {
      if (!e.matches) setOpen(false)
    }

    if (typeof mq.addEventListener === 'function') {
      mq.addEventListener('change', onChange)
      return () => mq.removeEventListener('change', onChange)
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`)
    const body = document.body
    const shouldLock = open && mq.matches
    const originalStyles = {
      overflow: body.style.overflow,
      paddingRight: body.style.paddingRight,
    }

    if (shouldLock) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
      if (scrollBarWidth > 0) body.style.paddingRight = `${scrollBarWidth}px`
      body.style.overflow = 'hidden'
    }
    return () => {
      if (shouldLock) {
        body.style.overflow = originalStyles.overflow
        body.style.paddingRight = originalStyles.paddingRight
      }
    }
  }, [open])

  return (
    <nav aria-label="Primary" className={styles.nav}>
      <button
        className={styles.nav__toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? (
          <X width={20} height={20} aria-hidden="true" />
        ) : (
          <Menu width={20} height={20} aria-hidden="true" />
        )}
      </button>
      <ul
        id="primary-nav"
        className={`${styles.nav__list} ${open ? styles['nav__list--open'] : ''}`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              className={`${styles.nav__link} ${active === item.id ? styles['nav__link--active'] : ''}`}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'page' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
