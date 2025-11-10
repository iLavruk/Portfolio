import type { InputHTMLAttributes } from 'react'
import styles from './input.module.css'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({ label, error, helperText, id, name, className, ...rest }: InputProps) {
  const inputId = id || name
  const describedBy = error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
  return (
    <div className={`${styles.field} ${className ?? ''}`.trim()}>
      {label ? (
        <label className={styles.field__label} htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input className={`${styles.field__control} ${error ? 'is-error' : ''}`.trim()} id={inputId} name={name} aria-invalid={!!error || undefined} aria-describedby={describedBy} {...rest} />
      {error ? <div id={`${inputId}-error`} className={styles.field__error} role="alert">{error}</div> : helperText ? <div id={`${inputId}-helper`} className={styles.field__helper}>{helperText}</div> : null}
    </div>
  )
}
