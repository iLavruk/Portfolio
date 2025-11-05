import resume from '@data/resumeData.json'
import type { ResumeData } from '@types'
import Header from '@components/header/Header'
import Hero from '@components/hero/Hero'
import Experience from '@components/experience/Experience'
import Skills from '@components/skills/Skills'
import Education from '@components/education/Education'
import About from '@components/about/About'
import Interests from '@components/interests/Interests'
import Languages from '@components/languages/Languages'
import Contact from '@components/contact/Contact'
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
        available={data.available}
        summary={data.summary}
        contacts={data.contacts}
        cvUrl={data.cvUrl}
      />

      <About summary={data.summary} />
      
      <Experience items={data.experience} />

      <Skills groups={data.skills} />

      <Education items={data.education} />

      <Languages items={data.languages} />

      <Interests items={data.interests} />

      <Contact contacts={data.contacts} cvUrl={data.cvUrl} />

      <Footer name={data.name} />
    </>
  )
}
