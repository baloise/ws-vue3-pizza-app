import { userJohnDoe } from './data/contact.data'
import { createContact } from '../Contact'

describe('Domain: Contact', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const contact = createContact(userJohnDoe)
      expect(contact.firstName).toBe('John')
      expect(contact.lastName).toBe('Doe')
      expect(contact.gender).toBe('male')
      expect(contact.email).toBe('john.doe@baloise.com')
    })
    test('should create an empty instance', () => {
      const contact = createContact()
      expect(contact.firstName).toBe('')
      expect(contact.lastName).toBe('')
      expect(contact.gender).toBe('male')
      expect(contact.email).toBe('')
    })
  })
})
