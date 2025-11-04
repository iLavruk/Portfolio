import Form from '@components/ui/form/Form'
import Input from '@components/ui/input/Input'
import Textarea from '@components/ui/textarea/Textarea'
import Button from '@components/ui/button/Button'

export default function ContactForm() {
  return (
    <Form onSubmit={(e) => e.preventDefault()} aria-describedby="contact-note">
      <Input label="Name" name="name" type="text" placeholder="Your name" />
      <Input label="Email" name="email" type="email" placeholder="you@example.com" autoComplete="email" />
      <Textarea label="Message" name="message" rows={5} placeholder="Write your message..." />
      <Button type="button" aria-describedby="contact-note" disabled>Send</Button>
    </Form>
  )
}
