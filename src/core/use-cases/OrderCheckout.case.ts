import { Result, UseCase } from '@baloise/web-app-clean-architecture'
import { countItems, createCart } from '../models/Cart'
import { CartItem } from '../models/CartItem'
import { EmptyShoppingCartError } from '../models/error/EmptyShoppingCartError'
import { createOrder, Order } from '../models/Order'
import { RouterService } from '../ports/RouterService'

interface Context {
  items: CartItem[]
}

interface Value {
  order: Order
}

export class OrderCheckoutUseCase implements UseCase<Context, Value> {
  constructor(private readonly router: RouterService) {}

  async execute({ items }: Context): Promise<Result<Value, string>> {
    try {
      const cart = createCart({ items })
      const amount = countItems(cart)

      if (amount <= 0) {
        throw new EmptyShoppingCartError()
      }

      const order = createOrder()
      this.router.goToCheckout()
      return Result.ok({ order })
    } catch (error) {
      return Result.fail('Could not checkout current shopping cart')
    }
  }
}
