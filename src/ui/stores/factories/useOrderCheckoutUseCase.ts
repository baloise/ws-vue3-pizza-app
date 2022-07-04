import { Router } from 'vue-router'
import { OrderCheckoutUseCase } from '@/core/use-cases/OrderCheckoutUseCase'
import { VueRouterAdapter } from '@/ui/adapters/VueRouterAdapter'

export function useOrderCheckoutUseCase(router: Router): OrderCheckoutUseCase {
  return new OrderCheckoutUseCase(new VueRouterAdapter(router))
}
