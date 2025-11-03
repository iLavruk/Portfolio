import { SectionId } from '@lib/constants/sections.constant'

type InterestsProps = {
  items: string[]
}

export default function Interests({ items }: InterestsProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.interests}>
      <h2>Interests</h2>
      <ul>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  )
}

