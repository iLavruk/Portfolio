import Nav from '@components/nav/Nav'
import styles from './header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.header__inner}`}>
        <a className={styles.header__brand} href="#home" aria-label="Home">
          Ivan.
        </a>
        <Nav />
      </div>
    </header>
  )
}
