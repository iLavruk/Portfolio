export default function Contacts({ email, linkedin }: { email?: string; linkedin?: string }) {
  if (!email && !linkedin) return null
  return (
    <div>
      {email && <a href={`mailto:${email}`}>{email}</a>}
      {linkedin && (
        <>
          {' '}
          |{' '}
          <a href={linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </>
      )}
    </div>
  )
}

