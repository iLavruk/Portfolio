import { NAV_ITEMS } from '@constants'
import { useActiveSection } from '@/lib/hooks/useActiveSection'
import styles from './nav.module.css'

export default function Nav() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))
  return (
    <nav aria-label="Primary" className={styles.nav}>
      <ul className={styles.nav__list}>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a
              className={`${styles.nav__link} ${active === item.id ? styles['nav__link--active'] : ''}`}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
