import { CartRemovePizzaUseCase } from '@/core/use-cases/CartRemovePizzaUseCase'

export function useCartRemovePizzaUseCase(): CartRemovePizzaUseCase {
  return new CartRemovePizzaUseCase()
}
