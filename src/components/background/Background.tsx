import styles from './background.module.css'

export default function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <span className={`${styles.blob} ${styles.blob1}`} />
      <span className={`${styles.blob} ${styles.blob2}`} />
      <span className={`${styles.blob} ${styles.blob3}`} />
    </div>
  )
}
