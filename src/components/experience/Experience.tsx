import type { ExperienceItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './experience.module.css'
import { contactIcons, miscIcons } from '@/lib/icons/lucide-map'

type ExperienceProps = {
  items: ExperienceItem[]
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id={SectionId.workExperience} className={styles.experience}>
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
      </div>
      <div className={`container ${styles.experience__wrap}`}>
        <div className={styles.experience__items}>
          {items.map(({ role, tag, company, period, bullets, location }) => (
              <article className={`${styles.experience__card} card`} key={`${company}-${period}`}>
                <div className={styles.experience__body}>
                  <header className={styles.experience__header}>
                    <div className={styles.experience__titleRow}>
                      <h3 className={styles.experience__role}>{role}</h3>
                      {tag ? <span className={styles.experience__tag}>{tag}</span> : null}
                    </div>
                    <div className={styles.experience__meta}>{company}</div>
                  </header>
                  <div className={`badge ${styles.experience__period}`}>
                    <miscIcons.Calendar className={styles.experience__icon} aria-hidden="true" />
                    {period}
                  </div>
                  <ul className={styles.experience__list}>
                    {bullets.map((b, i) => (
                      <li key={i} className={styles.experience__item}>
                        <miscIcons.ChevronRight className={styles.experience__bulletIcon} aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`badge ${styles.experience__badge}`}>
                  <contactIcons.location className={styles.experience__icon} aria-hidden="true" />
                  {location}
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  )
}
