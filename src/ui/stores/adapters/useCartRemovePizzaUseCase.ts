import { CartRemovePizzaUseCase } from '@/core/use-cases/CartRemovePizza.case'

export function useCartRemovePizzaUseCase(): CartRemovePizzaUseCase {
  return new CartRemovePizzaUseCase()
}
