import type { InputHTMLAttributes } from 'react'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  helperText?: string
}

export default function Input({ label, error, helperText, id, name, ...rest }: InputProps) {
  const inputId = id || name
  return (
    <div>
      {label ? (
        <label htmlFor={inputId}>
          {label}
        </label>
      ) : null}
      <input id={inputId} name={name} {...rest} />
      {error ? <div role="alert">{error}</div> : helperText ? <div>{helperText}</div> : null}
    </div>
  )
}

