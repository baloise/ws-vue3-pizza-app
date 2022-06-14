import { object, string, mixed, SchemaOf } from 'yup'
import { Contact } from '../models/Contact'

export function useContactSchema(): SchemaOf<Contact> {
  return object({
    firstName: string().required(),
    lastName: string().required(),
    gender: mixed().oneOf(['male', 'female']).required(),
    email: string().email().required(),
  })
}
