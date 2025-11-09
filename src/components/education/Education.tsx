import type { EducationItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './education.module.css'
import { miscIcons } from '@/lib/icons/lucide-map'

type EducationProps = {
  items: EducationItem[]
}

export default function Education({ items }: EducationProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.education} className={styles.education}>
      <div className="container">
        <h2 className={styles.education__title}>Education</h2>
      </div>
      <div className={`container ${styles.education__wrap}`}>
        <ul className={styles.education__grid}>
          {items.map(({ title, place, period }) => (
            <li className={styles.education__card} key={`${title}-${period}`}>
              <div className={styles.education__body}>
                <h3 className={styles.education__degree}>{title}</h3>
                <div className={styles.education__place}>{place}</div>
              </div>
              <div className={styles.education__period}>
                <miscIcons.Calendar className={styles.education__icon} aria-hidden="true" />
                {period}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

