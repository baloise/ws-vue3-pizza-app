import { produce, Immutable } from 'immer'

export type Address = Immutable<{
  postalCode: string
  city: string
  street: string
  streetNumber: string
}>

export const defaultAddress: Address = {
  postalCode: '',
  city: '',
  street: '',
  streetNumber: '',
}

export function createAddress(address?: Partial<Address>): Address {
  return produce(defaultAddress, (draft) => ({ ...draft, ...address }))
}

// export class Address {
//   constructor(
//     public readonly postalCode: string = '',
//     public readonly city: string = '',
//     public readonly street: string = '',
//     public readonly streetNumber: string = '',
//   ) {}
// }
// export function createAddress(address?: Partial<Address>): Address {
//   const { postalCode, city, street, streetNumber } = {
//     ...new Address(),
//     ...address,
//   }
//   return new Address(postalCode, city, street, streetNumber)
// }
