import { PizzaGetAllUseCase } from '@/core/use-cases/PizzaGetAllUseCase'
import { PizzaApiMockAdapter } from '@/ui/adapters/PizzaApiMockAdapter'

export function usePizzaGetAllUseCase(): PizzaGetAllUseCase {
  const api = new PizzaApiMockAdapter()

  return new PizzaGetAllUseCase(api)
}
