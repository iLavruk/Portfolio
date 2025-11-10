import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './button.module.css'

export type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ children, className, variant = 'primary', ...rest }: ButtonProps) {
  const classes =
    `${styles.button} ${variant === 'ghost' ? styles['button--ghost'] : styles['button--primary']} ${className ?? ''}`.trim()
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  )
}
