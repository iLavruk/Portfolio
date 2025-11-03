export const SectionId = {
  scroll: 'scroll',
  about: 'about',
  workExperience: 'work-experience',
  skills: 'skills',
  education: 'education',
  interests: 'interests',
  contact: 'contact',
} as const

export type SectionId = typeof SectionId[keyof typeof SectionId]

