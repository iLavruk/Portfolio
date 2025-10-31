import type { FooterProps } from '@types'

export default function Footer({ name }: FooterProps) {
  const year = new Date().getFullYear()
  return <footer>© {year} {name}</footer>
}

