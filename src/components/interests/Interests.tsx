import { SectionId } from '@lib/constants/sections.constant'
import styles from './interests.module.css'
import { interestIcons } from '@/lib/icons/lucide-map'

type InterestsProps = {
  items: string[]
}

export default function Interests({ items }: InterestsProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.interests} className={styles.interests}>
      <div className="container">
        <h2 className="section-title">Interests</h2>
      </div>
      <div className={`container ${styles.interests__wrap}`}>
        <ul className={styles.interests__grid}>
          {items.map((i) => {
            const Icon = interestIcons[i]
            return (
              <li className={`${styles.interests__card} card`} key={i}>
                <div className={styles.interests__avatar}>
                  {Icon ? <Icon className={styles.interests__icon} aria-hidden="true" /> : null}
                </div>
                <span className={styles.interests__name}>{i}</span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
