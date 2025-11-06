export type FormFieldBase = {
  name: string
  label: string
  placeholder?: string
  fullWidth?: boolean
}

export type TextInputField = FormFieldBase & {
  type: 'text' | 'email' | 'tel'
  autoComplete?: string
  isTextarea?: false
}

export type TextareaField = FormFieldBase & {
  isTextarea: true
  rows?: number
}

export type FormField = TextInputField | TextareaField

