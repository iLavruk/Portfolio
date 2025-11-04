import type { FormHTMLAttributes, PropsWithChildren } from 'react'

export type FormProps = PropsWithChildren<
  FormHTMLAttributes<HTMLFormElement>
>

export default function Form({ children, noValidate = true, ...rest }: FormProps) {
  return (
    <form noValidate={noValidate} {...rest}>
      {children}
    </form>
  )
}

