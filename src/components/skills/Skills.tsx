import type { SkillGroups } from '@types'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './skills.module.css'
import { skillIcons } from '@/lib/icons/lucide-map'

type SkillsProps = {
  groups: SkillGroups
}

export default function Skills({ groups }: SkillsProps) {
  const entries = Object.entries(groups) as [string, string[]][]
  const featuredEntry = entries.find(([label]) => label === 'Main Stack')
  const rest = entries.filter(([label]) => label !== 'Main Stack')
  const [featuredTitle, featuredList] = featuredEntry || []

  return (
    <section id={SectionId.skills} className={styles.skills}>
      <div className="container">
        <h2 className="section-title">Skills</h2>
      </div>
      <div className={`container ${styles.skills__wrap}`}>
        <div className={styles.skills__grid}>
          {featuredEntry ? (
            <div
              className={`${styles.skills__panel} ${styles['skills__panel--featured']} card`}
              key={featuredTitle}
            >
              <h3 className={styles.skills__groupTitle}>{featuredTitle}</h3>
              <ul className={styles.skills__chips}>
                {featuredList?.map((item) => {
                  const Icon = skillIcons[item]
                  return (
                    <li
                      className={`${styles.skills__chip} ${styles['skills__chip--featured']}`}
                      key={item}
                    >
                      {Icon ? <Icon className={styles.skills__icon} aria-hidden="true" /> : null}
                      <span className={styles.skills__chipLabel}>{item}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          ) : null}
          {rest.map(([group, list]) => (
            <div className={`${styles.skills__panel} card`} key={group}>
              <h3 className={styles.skills__groupTitle}>{group}</h3>
              <ul className={styles.skills__chips}>
                {list.map((item) => {
                  const Icon = skillIcons[item]
                  return (
                    <li className={styles.skills__chip} key={item}>
                      {Icon ? <Icon className={styles.skills__icon} aria-hidden="true" /> : null}
                      <span>{item}</span>
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
