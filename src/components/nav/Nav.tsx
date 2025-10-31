import { NAV_ITEMS } from '@constants'

export default function Nav() {
  return (
    <nav aria-label="Primary">
      <ul>
        {NAV_ITEMS.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
