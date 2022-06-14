import { produce, Immutable } from 'immer'
import { Address, defaultAddress } from './Address'
import { Contact, defaultContact } from './Contact'

export type Order = Immutable<{
  contact: Contact
  deliveryAddress: Address
}>

export const defaultOrder: Order = {
  contact: defaultContact,
  deliveryAddress: defaultAddress,
}

export function createOrder(order?: Partial<Order>): Order {
  return produce(defaultOrder, (draft) => ({ ...draft, ...order }))
}

// import { Contact } from './Contact'
// import { Address } from './Address'

// export class Order {
//   constructor(
//     public readonly contact: Contact = new Contact(),
//     public readonly deliveryAddress: Address = new Address(),
//   ) {}
// }

// export function createOrder(order?: Partial<Order>): Order {
//   const { contact, deliveryAddress } = { ...new Order(), ...order }
//   return new Order(contact, deliveryAddress)
// }
