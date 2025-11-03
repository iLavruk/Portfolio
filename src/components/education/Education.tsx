import type { EducationItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'

type EducationProps = {
  items: EducationItem[]
}

export default function Education({ items }: EducationProps) {
  return (
    <section id={SectionId.education}>
      <h2>Education</h2>
      <ul>
        {items.map((e) => (
          <li key={`${e.title}-${e.period}`}>
            <strong>{e.title}</strong> — {e.place} ({e.period})
          </li>
        ))}
      </ul>
    </section>
  )
}

