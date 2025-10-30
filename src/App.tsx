import resume from '@data/resumeData.json'
import type { ResumeData } from '@types'

const data = resume as unknown as ResumeData

export default function App() {
  return (
    <>
      <header>
        <h1>{data.name}</h1>
        <p>{data.title}</p>
      </header>

      <footer>© {new Date().getFullYear()} {data.name}</footer>
    </>
  )
}
