import { CartAddPizzaUseCase } from '@/core/use-cases/CartAddPizzaUseCase'

export function useCartAddPizzaUseCase(): CartAddPizzaUseCase {
  return new CartAddPizzaUseCase()
}
