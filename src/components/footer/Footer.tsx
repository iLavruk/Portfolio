import type { FooterProps } from '@types'
import styles from './footer.module.css'

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear()
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__wrap}`}>
        <div>
          &copy; {year} {name}
        </div>
      </div>
    </footer>
  )
}
