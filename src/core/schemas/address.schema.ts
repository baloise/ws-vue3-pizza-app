import { object, string, SchemaOf } from 'yup'
import { Address } from '../models/Address'

export function useAddressSchema(): SchemaOf<Address> {
  return object({
    postalCode: string().required().length(4),
    city: string().required(),
    street: string().required(),
    streetNumber: string().required(),
  })
}
