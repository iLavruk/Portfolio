import { SectionId } from '@lib/constants/sections.constant'
import styles from './interests.module.css'

type InterestsProps = {
  items: string[]
}

export default function Interests({ items }: InterestsProps) {
  if (!items?.length) return null
  return (
    <section id={SectionId.interests} className={styles.interests}>
      <h2>Interests</h2>
      <ul className={styles.interests__list}>
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </section>
  )
}
