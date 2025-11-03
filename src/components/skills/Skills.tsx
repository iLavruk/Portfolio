import type { SkillGroups } from '@types'
import { SectionId } from '@lib/constants/sections.constant'

type SkillsProps = {
  groups: SkillGroups
}

export default function Skills({ groups }: SkillsProps) {
  const entries = Object.entries(groups)
  return (
    <section id={SectionId.skills}>
      <h2>Skills</h2>
      {entries.map(([group, list]) => (
        <div key={group}>
          <h3>{group}</h3>
          <ul>
            {list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

