import type { LanguageItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './languages.module.css'
import { Globe } from 'lucide-react'

type LanguagesProps = {
  items: LanguageItem[]
}

export default function Languages({ items }: LanguagesProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.languages} className={styles.languages}>
      <div className="container">
        <h2 className="section-title">Languages</h2>
      </div>
      <div className={`container ${styles.languages__wrap}`}>
        <ul className={styles.languages__grid}>
          {items.map((l) => {
            const native = l.level.toLowerCase() === 'native'
            return (
              <li className={`${styles.languages__card} card`} key={l.name}>
                <Globe className={styles.languages__icon} aria-hidden="true" />
                <h3 className={styles.languages__name}>{l.name}</h3>
                <span
                  className={`badge ${styles.languages__badge} ${native ? styles['languages__badge--native'] : ''}`}
                >
                  {l.level}
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
