import { produce, Immutable } from 'immer'

export type Pizza = Immutable<{
  name: string
  description: string
  price: number
  image: string
}>

export const defaultPizza: Pizza = {
  name: '',
  description: '',
  price: 0,
  image: '',
}

export function createPizza(pizza?: Partial<Pizza>): Pizza {
  return produce(defaultPizza, (draft) => ({ ...draft, ...pizza }))
}

export function arePizzasEqual(pizza: Pizza, other: Pizza) {
  return pizza.name === other.name
}

// ================================================

// export interface Pizza {
//   readonly name: string
//   readonly description: string
//   readonly price: number
//   readonly image: string
// }

// ================================================

// export class Pizza {
//   constructor(
//     public readonly name: string = '',
//     public readonly description: string = '',
//     public readonly price: number = 0,
//     public readonly image: string = '',
//   ) {}
// }

// export function createPizza(pizza?: Partial<Pizza>): Pizza {
//   const { name, description, price, image } = { ...new Pizza(), ...pizza }
//   return new Pizza(name, description, price, image)
// }

// export function arePizzasEqual(pizza: Pizza, other: Pizza) {
//   return pizza.name === other.name
// }
