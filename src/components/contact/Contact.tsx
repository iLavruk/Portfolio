import type { Contacts } from '@types'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'
import { SectionId } from '@lib/constants/sections.constant'
import styles from './contact.module.css'
import { contactIcons } from '@/lib/icons/lucide-map'

type ContactProps = {
  contacts: Contacts
}

export default function Contact({ contacts }: ContactProps) {
  const tel = contacts.phone.replace(/[^\d+]/g, '')
  return (
    <section id={SectionId.contact} className={styles.contact}>
      <div className="container">
        <div className={styles.contact__head}>
          <h2 className="section-title">Get in Touch</h2>
          <p className={styles.contact__subtitle}>Open to new opportunities and interesting projects</p>
        </div>
      </div>
      <div className={`container ${styles.contact__wrap}`}>
        <div>
          <ul className={styles.contact__list}>
            <ContactCard
              icon={contactIcons.email}
              label="Email"
              value={contacts.email}
              href={`mailto:${contacts.email}`}
            />
            <ContactCard
              icon={contactIcons.phone}
              label="Phone"
              value={contacts.phone}
              href={`tel:${tel}`}
            />
            <ContactCard
              icon={contactIcons.linkedin}
              label="LinkedIn"
              value="Ivan Lavruk"
              href={contacts.linkedin}
              external
            />
              <ContactCard
                icon={contactIcons.github}
                label="GitHub"
                value={contacts.github}
                href={contacts.github}
                external
              />
            <ContactCard
              icon={contactIcons.location}
              label="Location"
              value={contacts.location}
            />
          </ul>
        </div>
        <div>
          <div className={`${styles.contact__formCard} card`}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
