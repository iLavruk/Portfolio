import type { ExperienceItem } from '@types'
import { SectionId } from '@lib/constants/sections.constant'

type ExperienceProps = {
  items: ExperienceItem[]
}

export default function Experience({ items }: ExperienceProps) {
  return (
    <section id={SectionId.workExperience}>
      <h2>Work Experience</h2>
      {items.map((exp) => (
        <article key={`${exp.company}-${exp.period}`}>
          <h3>{exp.role}</h3>
          <div>
            {exp.company} • {exp.location} • {exp.period}
          </div>
          {exp.bullets?.length ? (
            <ul>
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

