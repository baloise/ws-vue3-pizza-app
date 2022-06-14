import { CartAddPizzaUseCase } from '@/core/use-cases/CartAddPizza.case'

export function useCartAddPizzaUseCase(): CartAddPizzaUseCase {
  return new CartAddPizzaUseCase()
}
