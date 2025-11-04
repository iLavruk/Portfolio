import type { LanguageItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'

type LanguagesProps = {
  items: LanguageItem[]
}

export default function Languages({ items }: LanguagesProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.languages}>
      <h2>Languages</h2>
      <ul>
        {items.map((l) => (
          <li key={l.name}>
            {l.name}: {l.level}
          </li>
        ))}
      </ul>
    </section>
  )
}

