import { SectionId } from '@lib/constants/sections.constant'

type AboutProps = {
  summary?: string
}

export default function About({ summary }: AboutProps) {
  if (!summary) return null
  return (
    <section id={SectionId.about}>
      <h2>About Me</h2>
      <p>{summary}</p>
    </section>
  )
}

