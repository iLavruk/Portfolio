import { SectionId } from '@lib/constants/sections.constant'
import styles from './about.module.css'

type AboutProps = {
  summary?: string
}

export default function About({ summary }: AboutProps) {
  return (
    <section id={SectionId.about} className={styles.about}>
      <div className={`container ${styles.about__wrap}`}>
        <h2 className={styles.about__title}>About Me</h2>
        <p className={styles.about__text}>{summary}</p>
      </div>
    </section>
  )
}
