import { Immutable, produce } from 'immer'
import { calculatePrice, CartItem, createCartItem } from './CartItem'
import { MaxShoppingCartItemAmountError } from './error/MaxShoppingCartItemAmountError'
import { MinShoppingCartItemAmountError } from './error/MinShoppingCartItemAmountError'
import { arePizzasEqual, Pizza } from './Pizza'

export type Cart = Immutable<{
  items: CartItem[]
}>

export const defaultCart: Cart = {
  items: [],
}

export function createCart(cart?: Partial<Cart>): Cart {
  return produce(defaultCart, (draft) => {
    draft.items = []
    cart?.items?.forEach((item) => draft.items.push(item))
  })
}

export function addPizza(cart: Cart, pizza: Pizza): Cart {
  return produce(cart, (draft) => {
    const index = findIndex(draft, pizza)

    if (index < 0) {
      draft.items.push(createCartItem({ pizza, amount: 1 }))
      return
    }

    const { amount } = draft.items[index]
    const newAmount = amount + 1

    if (newAmount > 10) {
      throw new MaxShoppingCartItemAmountError()
    }

    draft.items[index] = createCartItem({ pizza, amount: newAmount })
  })
}

export function removePizza(cart: Cart, pizza: Pizza): Cart {
  return produce(cart, (draft) => {
    const index = findIndex(draft, pizza)

    if (index < 0) {
      return
    }

    const { amount } = draft.items[index]
    const newAmount = amount - 1
    if (newAmount < 0) {
      throw new MinShoppingCartItemAmountError()
    }

    draft.items[index] = createCartItem({ pizza, amount: newAmount })
  })
}

export function calculateTotal(cart: Cart): number {
  return cart.items.reduce((total, item) => (total += calculatePrice(item)), 0)
}

export function countItems(cart: Cart): number {
  return cart.items.reduce((total, item) => (total += item.amount), 0)
}

function findIndex(cart: Cart, pizza: Pizza): number {
  return cart.items.findIndex((item) => arePizzasEqual(item.pizza, pizza))
}

// import { calculatePrice, CartItem, createCartItem } from './CartItem'
// import { MaxShoppingCartItemAmountError } from './error/MaxShoppingCartItemAmountError'
// import { MinShoppingCartItemAmountError } from './error/MinShoppingCartItemAmountError'
// import { arePizzasEqual, Pizza } from './Pizza'

// export class Cart {
//   constructor(public readonly items: CartItem[] = []) {}
// }

// export function createCart(cart?: Partial<Cart>): Cart {
//   const { items } = { ...new Cart(), ...cart }
//   return new Cart(items)
// }

// export function addPizza(cart: Cart, pizza: Pizza): Cart {
//   const newCart = createCart(cart)
//   const index = findIndex(newCart, pizza)

//   if (index < 0) {
//     newCart.items.push(createCartItem({ pizza, amount: 1 }))
//     return newCart
//   }

//   const { amount } = newCart.items[index]
//   const newAmount = amount + 1

//   if (newAmount > 10) {
//     throw new MaxShoppingCartItemAmountError()
//   }

//   newCart.items[index] = createCartItem({ pizza, amount: newAmount })
//   return newCart
// }

// export function removePizza(cart: Cart, pizza: Pizza): Cart {
//   const newCart = createCart(cart)
//   const index = findIndex(newCart, pizza)

//   if (index < 0) {
//     return newCart
//   }

//   const { amount } = newCart.items[index]
//   const newAmount = amount - 1
//   if (newAmount < 0) {
//     throw new MinShoppingCartItemAmountError()
//   }

//   newCart.items[index] = createCartItem({ pizza, amount: newAmount })
//   return newCart
// }
