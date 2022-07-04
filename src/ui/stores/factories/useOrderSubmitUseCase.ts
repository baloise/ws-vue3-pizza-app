import { Router } from 'vue-router'
import { OrderSubmitUseCase } from '@/core/use-cases/OrderSubmitUseCase'
import { PizzaApiMockAdapter } from '@/ui/adapters/PizzaApiMockAdapter'
import { NotificationAdapter } from '@/ui/adapters/NotificationAdapter'
import { VueRouterAdapter } from '@/ui/adapters/VueRouterAdapter'
import { useCartStore } from '../cart.store'

export function useOrderSubmitUseCase(router: Router): OrderSubmitUseCase {
  const cart = useCartStore()
  const api = new PizzaApiMockAdapter()
  const notification = new NotificationAdapter()
  const vueRouter = new VueRouterAdapter(router)

  return new OrderSubmitUseCase(api, notification, vueRouter, cart)
}
