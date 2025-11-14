import Form from '@components/ui/form/Form'
import Input from '@components/ui/input/Input'
import Textarea from '@components/ui/textarea/Textarea'
import Button from '@components/ui/button/Button'
import styles from './contact-form.module.css'
import { formFields } from '@constants'
import { useState } from 'react'

import { validateContactForm, type FieldName } from '@/lib/validation/contact-form.validation'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [toast, setToast] = useState<string>('')
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({})

  const formId = import.meta.env.VITE_FORMSPREE_ID as string | undefined
  const endpoint = formId ? `https://formspree.io/f/${formId}` : undefined

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)

    // Honeypot
    if (fd.get('website')) {
      setStatus('success')
      setToast('Thanks!')
      form.reset()
      return
    }

    // Client-side validation
    const v = validateContactForm(fd)
    if (Object.keys(v).length) {
      setErrors(v)
      const first = Object.keys(v)[0] as FieldName
      const el = form.querySelector(`[name="${first}"]`) as HTMLElement | null
      el?.focus()
      return
    }
    setErrors({})

    if (!endpoint) {
      setStatus('error')
      setToast('Form is not configured. Please set VITE_FORMSPREE_ID.')
      return
    }

    try {
      setStatus('loading')
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: fd,
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setToast("Thanks! I'll get back to you soon.")
      form.reset()
    } catch {
      setStatus('error')
      setToast('Something went wrong. Please try again later.')
    }
  }

  return (
    <Form className={styles.form} onSubmit={onSubmit}>
      {/* Hidden fields */}
      <input type="hidden" name="_subject" value="New message from cv" />
      {/* Honeypot */}
      <input
        className={styles.form__hp}
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      {formFields.map((field) => {
        const nameMod = (styles as Record<string, string>)[`form__field--${field.name}`]
        const fieldClass =
          `${styles.form__field} ${field.fullWidth ? styles['form__field--full'] : ''} ${nameMod ?? ''}`.trim()
        const err = errors[field.name as FieldName]
        if ('isTextarea' in field && field.isTextarea) {
          return (
            <Textarea
              key={field.name}
              className={fieldClass}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              rows={field.rows ?? 5}
              required
              error={err}
            />
          )
        }
        return (
          <Input
            key={field.name}
            className={fieldClass}
            type={field.type}
            label={field.label}
            name={field.name}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            required
            error={err}
          />
        )
      })}
      <div className={styles.form__actions}>
        <Button type="submit" disabled={status === 'loading' || !endpoint}>
          {status === 'loading' ? 'Sending...' : 'Send'}
        </Button>
        {!endpoint ? (
          <span className={styles.form__note}>Form not configured yet.</span>
        ) : status === 'success' ? (
          <span className="badge" role="status" aria-live="polite">
            {toast}
          </span>
        ) : status === 'error' ? (
          <span className={styles.form__note} role="alert" aria-live="assertive">
            {toast}
          </span>
        ) : null}
      </div>
    </Form>
  )
}
