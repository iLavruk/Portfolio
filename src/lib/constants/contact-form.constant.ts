import type { FormField } from '@types'

export const formFields: FormField[] = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Your name',
    autoComplete: 'name',
    fullWidth: false,
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'you@example.com',
    autoComplete: 'email',
    fullWidth: false,
  },
  {
    name: 'message',
    label: 'Message',
    placeholder: 'Write your message...',
    fullWidth: true,
    isTextarea: true,
    rows: 5,
  },
]
