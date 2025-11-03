import Nav from '@components/nav/Nav'
import Contacts from './Contacts'
import type { HeaderProps } from '@types'

export default function Header({ email, linkedin }: HeaderProps) {
  return (
    <header>
      <div>
        <a href="#">Ivan.</a>
      </div>
      <Nav />
      <Contacts email={email} linkedin={linkedin} />
    </header>
  )
}
