import { Result, UseCase } from '@baloise/web-app-clean-architecture'
import { createPizza, Pizza } from '../models/Pizza'
import { PizzaApi } from '../ports/PizzaApi'

interface Context {}

export class PizzaGetAllUseCase implements UseCase<Context, Pizza[]> {
  constructor(private readonly api: PizzaApi) {}

  async execute(): Promise<Result<Pizza[], string>> {
    const result = await this.api.getAll()

    if (result.isSuccess) {
      const json = await result.value()
      const pizzas = json.map((item: Pizza) => createPizza(item))
      return Result.ok(pizzas)
    } else {
      return Result.fail('Could not load pizzas form server')
    }
  }
}
