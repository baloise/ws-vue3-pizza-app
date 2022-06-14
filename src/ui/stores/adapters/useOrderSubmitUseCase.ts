import { Router } from 'vue-router'
import { OrderSubmitUseCase } from '@/core/use-cases/OrderSubmit.case'
import { PizzaApiMock } from '@/ui/adapters/PizzaApiMock'
import { ToastServiceAdapter } from '@/ui/adapters/ToastServiceAdapter'
import { RouterServiceAdapter } from '@/ui/adapters/RouterServiceAdapter'
import { useCartStore } from '../cart.store'

export function useOrderSubmitUseCase(router: Router): OrderSubmitUseCase {
  const cart = useCartStore()
  const api = new PizzaApiMock()
  const notification = new ToastServiceAdapter()
  const vueRouter = new RouterServiceAdapter(router)

  return new OrderSubmitUseCase(api, notification, vueRouter, cart)
}
