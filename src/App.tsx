import resume from '@data/resumeData.json'
import type { ResumeData } from '@types'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import Experience from '@components/experience/Experience'
import Footer from '@components/footer/Footer'

const data = resume as unknown as ResumeData

export default function App() {
  return (
    <>
      <Header email={data.contacts.email} linkedin={data.contacts.linkedin} />
      <Hero
        name={data.name}
        title={data.title}
        location={data.contacts.location}
        available={data.available}
        summary={data.summary}
        contacts={data.contacts}
        cvUrl={data.cvUrl}
      />

      <Experience items={data.experience} />

      <Footer name={data.name} />
    </>
  )
}
