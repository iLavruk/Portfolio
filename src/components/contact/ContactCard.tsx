import styles from './contact.module.css'
import type { ComponentType, SVGProps } from 'react'

type ContactCardProps = {
  icon?: ComponentType<SVGProps<SVGSVGElement>>
  label: string
  value: string
  href?: string
  external?: boolean
}

export default function ContactCard({ icon: Icon, label, value, href, external }: ContactCardProps) {
  const content = href ? (
    <a className={styles.contact__link} href={href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer noopener' : undefined}>
      {value}
    </a>
  ) : (
    <span>{value}</span>
  )

  return (
    <li className={`${styles.contact__card} card`}>
      <div className={`avatar ${styles.contact__avatar}`}>{Icon ? <Icon className={styles.contact__icon} aria-hidden="true" /> : null}</div>
      <div className={styles.contact__body}>
        <div className={styles.contact__label}>{label}</div>
        <div className={styles.contact__value}>{content}</div>
      </div>
    </li>
  )
}
