export const SectionId = {
  home: 'home',
  about: 'about',
  workExperience: 'work-experience',
  skills: 'skills',
  education: 'education',
  languages: 'languages',
  interests: 'interests',
  contact: 'contact',
} as const

export type SectionId = typeof SectionId[keyof typeof SectionId]
