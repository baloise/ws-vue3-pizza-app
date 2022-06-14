import { Router } from 'vue-router'
import { OrderCheckoutUseCase } from '@/core/use-cases/OrderCheckout.case'
import { RouterServiceAdapter } from '@/ui/adapters/RouterServiceAdapter'

export function useOrderCheckoutUseCase(router: Router): OrderCheckoutUseCase {
  return new OrderCheckoutUseCase(new RouterServiceAdapter(router))
}
