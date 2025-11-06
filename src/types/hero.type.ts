import type { Contacts } from './contacts.type'

export type HeroProps = {
  name: string
  title: string
  location: string
  summary: string
  tagline: string
  available: boolean
  contacts: Contacts
  cvUrl: string
}
