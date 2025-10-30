import type { Contacts, SkillGroups, ExperienceItem, EducationItem, LanguageItem } from './types'

export type ResumeData = {
  name: string
  title: string
  contacts: Contacts
  skills: SkillGroups
  experience: ExperienceItem[]
  education: EducationItem[]
  languages: LanguageItem[]
  interests: string[]
}

