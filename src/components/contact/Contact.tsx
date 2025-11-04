import type { Contacts } from '@types'
import ContactForm from './ContactForm'
import { SectionId } from '@lib/constants/sections.constant'

type ContactProps = {
  contacts: Contacts
  cvUrl?: string
}

export default function Contact({ contacts, cvUrl }: ContactProps) {
  const tel = contacts.phone.replace(/[^\d+]/g, '')
  return (
    <section id={SectionId.contact}>
      <h2>Get in Touch</h2>
      <ul>
        <li>
          <strong>Email:</strong> <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </li>
        <li>
          <strong>Phone:</strong> <a href={`tel:${tel}`}>{contacts.phone}</a>
        </li>
        <li>
          <strong>Location:</strong> {contacts.location}
        </li>
        <li>
          <strong>LinkedIn:</strong>{' '}
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">
            {contacts.linkedin}
          </a>
        </li>
        {contacts.github ? (
          <li>
            <strong>GitHub:</strong>{' '}
            <a href={contacts.github} target="_blank" rel="noreferrer">
              {contacts.github}
            </a>
          </li>
        ) : null}
        {cvUrl ? (
          <li>
            <a href={cvUrl} download target="_blank" rel="noreferrer noopener">
              Download CV
            </a>
          </li>
        ) : null}
      </ul>

      <h3>Send a Message</h3>
      <ContactForm />
    </section>
  )
}
