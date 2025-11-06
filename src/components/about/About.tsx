import { SectionId } from '@lib/constants/sections.constant'
import styles from './about.module.css'
import aboutImg from '@/assets/images/about-me.webp'

type AboutProps = {
  summary: string
}

export default function About({ summary }: AboutProps) {
  return (
    <section id={SectionId.about} className={styles.about}>
      <div className="container">
        <div className={styles.about__head}>
          <h2 className={styles.about__title}>About Me</h2>
        </div>
      </div>
      <div className={`container ${styles.about__wrap}`}>
        <div className={styles.about__card}>
          {summary.split('\n').map((p, i) => (
            <p key={i} className={styles.about__text}>{p.trim()}</p>
          ))}
        </div>
        <figure className={styles.about__media}>
          <img className={styles.about__image} src={aboutImg} alt="About me" loading="lazy" decoding="async" />
        </figure>
      </div>
    </section>
  )
}
