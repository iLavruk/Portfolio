export default function Contacts({ email }: { email?: string }) {
  if (!email) return null
  return (
    <div className="header-contacts">
      <a className="contact-link" href={`mailto:${email}`}>{email}</a>
    </div>
  )
}
