import type { TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.css'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Textarea({ label, error, helperText, id, name, className, ...rest }: TextareaProps) {
  const textareaId = id || name
  const describedBy = error ? `${textareaId}-error` : helperText ? `${textareaId}-helper` : undefined
  return (
    <div className={`${styles.field} ${className ?? ''}`.trim()}>
      {label ? (
        <label className={styles.field__label} htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea className={`${styles.field__control} ${error ? 'is-error' : ''}`.trim()} id={textareaId} name={name} aria-invalid={!!error || undefined} aria-describedby={describedBy} {...rest} />
      {error ? <div id={`${textareaId}-error`} className={styles.field__error} role="alert">{error}</div> : helperText ? <div id={`${textareaId}-helper`} className={styles.field__helper}>{helperText}</div> : null}
    </div>
  )
}
