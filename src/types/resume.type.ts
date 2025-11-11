import type {
  Contacts,
  SkillGroups,
  ExperienceItem,
  EducationItem,
  LanguageItem,
  InterestItem,
} from './types'

export type ResumeData = {
  name: string
  title: string
  contacts: Contacts
  skills: SkillGroups
  experience: ExperienceItem[]
  education: EducationItem[]
  languages: LanguageItem[]
  interests: InterestItem[]
  summary: string
  tagline: string
  available: boolean
  cvUrl: string
}
