export type FieldName = 'name' | 'email' | 'message'

export type ContactErrors = Partial<Record<FieldName, string>>

export function validateContactForm(fd: FormData): ContactErrors {
  const name = String(fd.get('name') ?? '').trim()
  const email = String(fd.get('email') ?? '').trim()
  const message = String(fd.get('message') ?? '').trim()

  const next: ContactErrors = {}

  if (!name) next.name = 'Name is required'
  else if (name.length < 2) next.name = 'Please enter at least 2 characters'

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) next.email = 'Email is required'
  else if (!emailRe.test(email)) next.email = 'Please enter a valid email'

  if (!message) next.message = 'Message is required'
  else if (message.length < 10) next.message = 'Message should be at least 10 characters'

  return next
}

