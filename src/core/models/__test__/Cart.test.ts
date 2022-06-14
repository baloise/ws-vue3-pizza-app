import { pizzaMargherita, pizzaStromboli } from './data/pizza.data'
import { createCartItem } from '../CartItem'
import { calculateTotal, countItems, createCart } from '../Cart'

describe('Domain: Cart', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const cart = createCart({
        items: [createCartItem({ pizza: pizzaMargherita, amount: 1 })],
      })
      expect(cart.items.length).toBe(1)
    })
    test('should create an empty instance', () => {
      const cart = createCart()
      expect(cart.items.length).toBe(0)
    })
  })

  describe('amount', () => {
    test('amount should be 6', () => {
      const cart = createCart({
        items: [
          createCartItem({ pizza: pizzaMargherita, amount: 4 }),
          createCartItem({ pizza: pizzaStromboli, amount: 2 }),
        ],
      })
      expect(countItems(cart)).toBe(6)
    })
    test('amount should be 0 due to empty amount', () => {
      expect(countItems(createCart())).toBe(0)
    })
  })

  describe('total', () => {
    test('total should be 100', () => {
      const cart = createCart({
        items: [
          createCartItem({ pizza: pizzaMargherita, amount: 4 }),
          createCartItem({ pizza: pizzaStromboli, amount: 2 }),
        ],
      })
      expect(calculateTotal(cart)).toBe(100)
    })
    test('total should be 0 due to empty amount', () => {
      expect(calculateTotal(createCart())).toBe(0)
    })
  })
})
