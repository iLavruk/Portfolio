import type { LanguageItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './languages.module.css'

type LanguagesProps = {
  items: LanguageItem[]
}

export default function Languages({ items }: LanguagesProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.languages} className={styles.languages}>
      <h2>Languages</h2>
      <ul className={styles.languages__list}>
        {items.map((l) => (
          <li key={l.name}>
            {l.name}: {l.level}
          </li>
        ))}
      </ul>
    </section>
  )
}
