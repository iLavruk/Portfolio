import type { HeroProps } from '@types'
import avatarSrc from '@/assets/images/avatar.webp'

export default function Hero({ name, title, location, summary, available, contacts, cvUrl }: HeroProps) {
  return (
    <section id="scroll">
      {available && <div>Available for work</div>}
      <h1>{name}</h1>
      <p>{title}</p>
      {location && <div>{location}</div>}
      {summary && <p>{summary}</p>}
      <figure>
        <img src={avatarSrc} alt={name} loading="lazy" />
      </figure>
      <div>
        {contacts?.email ? (
          <a href={`mailto:${contacts.email}`}>Contact Me</a>
        ) : (
          <button type="button" disabled>
            Contact Me
          </button>
        )}
        {cvUrl ? (
          <a href={cvUrl} download target="_blank" rel="noreferrer noopener">
            Download CV
          </a>
        ) : (
          <button type="button" disabled>
            Download CV
          </button>
        )}
      </div>
      <div>
        {contacts?.linkedin && (
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        )}
        {contacts?.github && (
          <>
            {' '}
            |{' '}
            <a href={contacts.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </>
        )}
        {contacts?.email && (
          <>
            {' '}
            | <a href={`mailto:${contacts.email}`}>Email</a>
          </>
        )}
      </div>
    </section>
  )
}
