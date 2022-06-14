import { object, SchemaOf } from 'yup'
import { Order } from '../models/Order'
import { useAddressSchema } from './address.schema'
import { useContactSchema } from './contact.schema'

export function useOrderSchema(): SchemaOf<Order> {
  return object({
    contact: useContactSchema(),
    deliveryAddress: useAddressSchema(),
  })
}
