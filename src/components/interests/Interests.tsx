import { SectionId } from '@lib/constants/sections.constant'
import styles from './interests.module.css'
import { interestIcons } from '@/lib/icons/lucide-map'
import type { InterestItem } from '@types'

type InterestsProps = {
  items: InterestItem[]
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
            const name = i.name
            const Icon = interestIcons[name]
            return (
              <li className={`${styles.interests__card} card`} key={name}>
                <div className={`avatar avatar--elevated ${styles.interests__avatar}`}>
                  {Icon ? <Icon className={styles.interests__icon} aria-hidden="true" /> : null}
                </div>
                <span className={styles.interests__name}>{name}</span>
                <p className={styles.interests__desc}>{i.description}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
