import type { HeroProps } from '@types'
import avatarSrc from '@/assets/images/avatar.webp'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './hero.module.css'
import { contactIcons, miscIcons } from '@/lib/icons/lucide-map'

export default function Hero({ name, title, location, summary, available, contacts, cvUrl }: HeroProps) {
  return (
    <section id={SectionId.home} className={styles.hero}>
      <div className={`container ${styles.hero__inner}`}>
        <div className={styles.hero__content}>
          {available && <div className={styles.hero__badge}>Available for work</div>}
          {(() => {
            const [first, ...rest] = name.split(' ')
            const last = rest.join(' ')
            return (
              <h1 className={styles.hero__title}>
                <span className={styles.hero__first}>{first}</span> {last && (
                  <span className={styles.hero__last}>{last}</span>
                )}
              </h1>
            )
          })()}
          <div className={styles.hero__divider} />
          <p className={styles.hero__subtitle}>{title}</p>
          {location && (
            <div className={styles.hero__location}>
              {contactIcons.location ? (
                <contactIcons.location className={styles.hero__icon} aria-hidden="true" />
              ) : null}
              {location}
            </div>
          )}
          {summary && <p className={styles.hero__summary}>{summary}</p>}
          <div className={styles.hero__actions}>
            {contacts?.email ? (
              <a className={styles.hero__btn} href={`mailto:${contacts.email}`}>
                {contactIcons.email ? <contactIcons.email className={styles.hero__icon} aria-hidden="true" /> : null}
                Contact Me
              </a>
            ) : (
              <button className={styles.hero__btn} type="button" disabled>
                {contactIcons.email ? <contactIcons.email className={styles.hero__icon} aria-hidden="true" /> : null}
                Contact Me
              </button>
            )}
            {cvUrl ? (
              <a className={`${styles.hero__btn} ${styles['hero__btn--ghost']}`} href={cvUrl} download target="_blank" rel="noreferrer noopener">
                {miscIcons.Download ? <miscIcons.Download className={styles.hero__icon} aria-hidden="true" /> : null}
                Download CV
              </a>
            ) : (
              <button className={`${styles.hero__btn} ${styles['hero__btn--ghost']}`} type="button" disabled>
                {miscIcons.Download ? <miscIcons.Download className={styles.hero__icon} aria-hidden="true" /> : null}
                Download CV
              </button>
            )}
          </div>
          <div className={styles.hero__links}>
            {contacts?.linkedin && (
              <a href={contacts.linkedin} target="_blank" rel="noreferrer">
                {contactIcons.linkedin ? <contactIcons.linkedin className={styles.hero__icon} aria-hidden="true" /> : null}
                LinkedIn
              </a>
            )}
            {contacts?.github && (
              <>
                {' '}
                |{' '}
                <a href={contacts.github} target="_blank" rel="noreferrer">
                  {contactIcons.github ? <contactIcons.github className={styles.hero__icon} aria-hidden="true" /> : null}
                  GitHub
                </a>
              </>
            )}
            {contacts?.email && (
              <>
                {' '}
                | <a href={`mailto:${contacts.email}`}>
                  {contactIcons.email ? <contactIcons.email className={styles.hero__icon} aria-hidden="true" /> : null}
                  Email
                </a>
              </>
            )}
          </div>
        </div>
        <figure className={styles.hero__media}>
          <img
            className={styles.hero__img}
            src={avatarSrc}
            alt={name}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  )
}
