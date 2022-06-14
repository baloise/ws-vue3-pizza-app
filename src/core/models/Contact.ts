import { produce, Immutable } from 'immer'

export type Gender = 'male' | 'female'

export type Contact = Immutable<{
  gender: Gender
  firstName: string
  lastName: string
  email: string
}>

export const defaultContact: Contact = {
  gender: 'male',
  firstName: '',
  lastName: '',
  email: '',
}

export function createContact(contact?: Partial<Contact>): Contact {
  return produce(defaultContact, (draft) => ({ ...draft, ...contact }))
}

// export class Contact {
//   constructor(
//     public readonly gender: Gender = 'male',
//     public readonly firstName: string = '',
//     public readonly lastName: string = '',
//     public readonly email: string = '',
//   ) {}
// }

// export function createContact(contact?: Partial<Contact>): Contact {
//   const { gender, firstName, lastName, email } = {
//     ...new Contact(),
//     ...contact,
//   }
//   return new Contact(gender, firstName, lastName, email)
// }
