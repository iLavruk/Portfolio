import type { TextareaHTMLAttributes } from 'react'
import styles from './textarea.module.css'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Textarea({ label, error, helperText, id, name, className, ...rest }: TextareaProps) {
  const textareaId = id || name
  return (
    <div className={`${styles.field} ${className ?? ''}`.trim()}>
      {label ? (
        <label className={styles.field__label} htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea className={styles.field__control} id={textareaId} name={name} {...rest} />
      {error ? <div className={styles.field__error} role="alert">{error}</div> : helperText ? <div className={styles.field__helper}>{helperText}</div> : null}
    </div>
  )
}
