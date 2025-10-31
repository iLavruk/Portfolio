import resume from '@data/resumeData.json'
import type { ResumeData } from '@types'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import Footer from '@components/footer/Footer'

const data = resume as unknown as ResumeData

export default function App() {
  return (
    <>
      <Header />
      <Hero
        name={data.name}
        title={data.title}
        location={data.contacts.location}
        available={true}
        summary="Building modern web applications with focus on user experience and performance. Specialized in React ecosystem and passionate about turning complex challenges into elegant solutions."
      />

      <Footer name={data.name} />
    </>
  )
}
