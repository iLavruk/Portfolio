import type { EducationItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './education.module.css'

type EducationProps = {
  items: EducationItem[]
}

export default function Education({ items }: EducationProps) {
  return (
    <section id={SectionId.education} className={styles.education}>
      <h2>Education</h2>
      <ul className={styles.education__list}>
        {items.map((e) => (
          <li key={`${e.title}-${e.period}`}>
            <strong>{e.title}</strong> — {e.place} ({e.period})
          </li>
        ))}
      </ul>
    </section>
  )
}
