import type { NavItem } from '@types'
import { SectionId } from './sections.constant'

export const NAV_ITEMS: NavItem[] = [
  { id: SectionId.about, label: 'About Me' },
  { id: SectionId.workExperience, label: 'Work Experience' },
  { id: SectionId.skills, label: 'Skills' },
  { id: SectionId.education, label: 'Education' },
  { id: SectionId.languages, label: 'Languages' },
  { id: SectionId.interests, label: 'Interests' },
  { id: SectionId.contact, label: 'Get in Touch' },
]
