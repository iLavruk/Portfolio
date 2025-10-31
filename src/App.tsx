import resume from '@data/resumeData.json'
import type { ResumeData } from '@types'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'

const data = resume as unknown as ResumeData

export default function App() {
  return (
    <>
      <Header />
      <Hero name={data.name} title={data.title} />

      <footer>© {new Date().getFullYear()} {data.name}</footer>
    </>
  )
}
