import { PizzaGetAllUseCase } from '@/core/use-cases/PizzaGetAll.case'
import { PizzaApiMock } from '@/ui/adapters/PizzaApiMock'

export function usePizzaGetAllUseCase(): PizzaGetAllUseCase {
  const api = new PizzaApiMock()

  return new PizzaGetAllUseCase(api)
}
