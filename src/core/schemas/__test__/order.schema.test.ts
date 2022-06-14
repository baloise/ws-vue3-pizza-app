import { createOrder } from '../../models/Order'
import { addressBasel } from '../../models/__test__/data/address.data'
import { userJohnDoe } from '../../models/__test__/data/contact.data'
import { useOrderSchema } from '../order.schema'

describe('Service: Schema Order', () => {
  test('empty form value should throw an error', async () => {
    const schema = useOrderSchema()
    expect(() => schema.validateSync(createOrder())).toThrowError()
  })
  test('correct form value should pass', async () => {
    const schema = useOrderSchema()
    schema.validateSync(
      createOrder({
        contact: userJohnDoe,
        deliveryAddress: addressBasel,
      }),
    )
  })
})
