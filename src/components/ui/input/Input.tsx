import type { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({ label, error, helperText, id, name, className, ...rest }: InputProps) {
  const inputId = id || name
  return (
    <div className={`${styles.field} ${className ?? ''}`.trim()}>
      {label ? (
        <label className={styles.field__label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input className={styles.field__control} id={inputId} name={name} {...rest} />
      {error ? <div className={styles.field__error} role="alert">{error}</div> : helperText ? <div className={styles.field__helper}>{helperText}</div> : null}
    </div>
  )
}
