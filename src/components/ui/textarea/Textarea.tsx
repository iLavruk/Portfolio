import type { TextareaHTMLAttributes } from 'react'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Textarea({ label, error, helperText, id, name, ...rest }: TextareaProps) {
  const textareaId = id || name
  return (
    <div>
      {label ? (
        <label htmlFor={textareaId}>
          {label}
        </label>
      ) : null}
      <textarea id={textareaId} name={name} {...rest} />
      {error ? <div role="alert">{error}</div> : helperText ? <div>{helperText}</div> : null}
    </div>
  )
}

