import type { SkillGroups } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './skills.module.css'
import { skillIcons } from '@/lib/icons/lucide-map'

type SkillsProps = {
  groups: SkillGroups
}

export default function Skills({ groups }: SkillsProps) {
  const entries = Object.entries(groups)
  return (
    <section id={SectionId.skills} className={styles.skills}>
      <div className={`container ${styles.skills__wrap}`}>
        <h2 className={styles.skills__title}>Skills</h2>
        <div className={styles.skills__grid}>
          {entries.map(([group, list]) => (
            <div className={styles.skills__panel} key={group}>
              <h3 className={styles.skills__groupTitle}>{group}</h3>
              <ul className={styles.skills__chips}>
                {list.map((item) => {
                  const Icon = skillIcons[item]
                  return (
                    <li className={styles.skills__chip} key={item}>
                      {Icon ? <Icon className={styles.skills__icon} aria-hidden="true" /> : null}
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
