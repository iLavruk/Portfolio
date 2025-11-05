import type { Contacts } from '@types'
import ContactForm from './ContactForm'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './contact.module.css'

type ContactProps = {
  contacts: Contacts
  cvUrl?: string
}

export default function Contact({ contacts, cvUrl }: ContactProps) {
  const tel = contacts.phone.replace(/[^\d+]/g, '')
  return (
    <section id={SectionId.contact} className={styles.contact}>
      <h2>Get in Touch</h2>
      <ul className={styles.contact__list}>
        <li className={styles.contact__item}>
          <span className={styles.contact__label}>Email:</span> <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </li>
        <li className={styles.contact__item}>
          <span className={styles.contact__label}>Phone:</span> <a href={`tel:${tel}`}>{contacts.phone}</a>
        </li>
        <li className={styles.contact__item}>
          <span className={styles.contact__label}>Location:</span> {contacts.location}
        </li>
        <li className={styles.contact__item}>
          <span className={styles.contact__label}>LinkedIn:</span>{' '}
          <a href={contacts.linkedin} target="_blank" rel="noreferrer">{contacts.linkedin}</a>
        </li>
        {contacts.github ? (
          <li className={styles.contact__item}>
            <span className={styles.contact__label}>GitHub:</span>{' '}
            <a href={contacts.github} target="_blank" rel="noreferrer">{contacts.github}</a>
          </li>
        ) : null}
        {cvUrl ? (
          <li className={styles.contact__item}>
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
