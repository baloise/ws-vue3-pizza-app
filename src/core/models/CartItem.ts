import { produce, Immutable } from 'immer'
import { defaultPizza, Pizza } from './Pizza'

export type CartItem = Immutable<{
  pizza: Pizza
  amount: number
}>

export const defaultCartItem: CartItem = {
  pizza: defaultPizza,
  amount: 0,
}

export function createCartItem(cartItem?: Partial<CartItem>): CartItem {
  return produce(defaultCartItem, (draft) => ({ ...draft, ...cartItem }))
}

export function calculatePrice(item: CartItem): number {
  return item.pizza.price * item.amount
}

// import { createPizza, Pizza } from './Pizza'

// export class CartItem {
//   constructor(
//     public readonly pizza: Pizza = createPizza(),
//     public readonly amount: number = 0,
//   ) {}
// }

// export function createCartItem(item?: Partial<CartItem>): CartItem {
//   const defaultValues = new CartItem()
//   const { pizza, amount } = { ...defaultValues, ...item }
//   return new CartItem(pizza, amount)
// }
