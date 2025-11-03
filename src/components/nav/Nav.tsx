import { NAV_ITEMS } from '@constants'
import { useActiveSection } from '@/lib/hooks/useActiveSection'

export default function Nav() {
  const active = useActiveSection(NAV_ITEMS.map((n) => n.id))
  return (
    <nav aria-label="Primary">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} aria-current={active === item.id ? 'page' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
