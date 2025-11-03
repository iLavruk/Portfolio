import type { HeroProps } from '@types'
import avatarSrc from '@/assets/images/avatar.webp'

export default function Hero({ name, title, location, summary, available }: HeroProps) {
  return (
    <section>
      {available && <div>Available for work</div>}
      <h1>{name}</h1>
      <p>{title}</p>
      {location && <div>{location}</div>}
      {summary && <p>{summary}</p>}
      <figure>
        <img src={avatarSrc} alt={name} loading="lazy" />
      </figure>
      <div>
        <button type="button">Contact Me</button>
        <button type="button">Download CV</button>
      </div>
      <div>
        <a href="#">LinkedIn</a> | <a href="#">GitHub</a> | <a href={`mailto:`}>Email</a>
      </div>
    </section>
  )
}
