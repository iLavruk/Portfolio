import type { HeroProps } from '@types'

export default function Hero({ name, title }: HeroProps) {
  return (
    <section>
      <h1>{name}</h1>
      <p>{title}</p>
    </section>
  )
}
