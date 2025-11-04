import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

export type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement>
>

export default function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>
}

