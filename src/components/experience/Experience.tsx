import type { ExperienceItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './experience.module.css'

type ExperienceProps = {
  items: ExperienceItem[]
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id={SectionId.workExperience} className={styles.experience}>
      <h2>Work Experience</h2>
      {items.map((exp) => (
        <article className={styles.experience__card} key={`${exp.company}-${exp.period}`}>
          <h3>{exp.role}</h3>
          <div className={styles.experience__meta}>
            {exp.company} • {exp.location} • {exp.period}
          </div>
          {exp.bullets?.length ? (
            <ul className={styles.experience__list}>
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </section>
  )
}
