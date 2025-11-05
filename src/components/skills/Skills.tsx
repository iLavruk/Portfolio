import type { SkillGroups } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './skills.module.css'

type SkillsProps = {
  groups: SkillGroups
}

export default function Skills({ groups }: SkillsProps) {
  const entries = Object.entries(groups)
  return (
    <section id={SectionId.skills} className={styles.skills}>
      <h2>Skills</h2>
      {entries.map(([group, list]) => (
        <div key={group}>
          <h3 className={styles.skills__groupTitle}>{group}</h3>
          <ul className={styles.skills__chips}>
            {list.map((item) => (
              <li className={styles.skills__chip} key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
