import { NAV_ITEMS } from '@constants'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import styles from './nav.module.css'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Nav() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))
  const [open, setOpen] = useState(false)
  return (
    <nav aria-label="Primary" className={styles.nav}>
      <button
        className={styles.nav__toggle}
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X width={20} height={20} aria-hidden="true" /> : <Menu width={20} height={20} aria-hidden="true" />}
      </button>
      <ul id="primary-nav" className={`${styles.nav__list} ${open ? styles['nav__list--open'] : ''}`}>
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
