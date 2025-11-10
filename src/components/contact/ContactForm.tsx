import Form from '@components/ui/form/Form'
import Input from '@components/ui/input/Input'
import Textarea from '@components/ui/textarea/Textarea'
import Button from '@components/ui/button/Button'
import styles from './contact-form.module.css'
import { formFields } from '@constants'

export default function ContactForm() {
  return (
    <Form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      {formFields.map(field => {
        const nameMod = (styles as Record<string, string>)[`form__field--${field.name}`]
        const fieldClass = `${styles.form__field} ${field.fullWidth ? styles['form__field--full'] : ''} ${nameMod ?? ''}`.trim()
        if ('isTextarea' in field && field.isTextarea) {
          return (
            <Textarea
              key={field.name}
              className={fieldClass}
              label={field.label}
              name={field.name}
              placeholder={field.placeholder}
              rows={field.rows ?? 5}
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
          />
        )
      })}
      <div className={styles.form__actions}>
        <Button type="submit" disabled>Send</Button>
      </div>
    </Form>
  )
}
