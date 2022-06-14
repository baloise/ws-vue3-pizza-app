import { pizzaMargherita } from './data/pizza.data'
import { arePizzasEqual, createPizza } from '../Pizza'
import { calculatePrice, createCartItem } from './../CartItem'

describe('Domain: CartItem', () => {
  describe('constructor', () => {
    test('should create a new instance', () => {
      const item = createCartItem({
        pizza: pizzaMargherita,
        amount: 1,
      })
      expect(arePizzasEqual(item.pizza, pizzaMargherita))
      expect(item.amount).toBe(1)
    })
    test('should create an empty instance', () => {
      const item = createCartItem()
      expect(arePizzasEqual(item.pizza, createPizza()))
      expect(item.amount).toBe(0)
    })
  })

  describe('sum', () => {
    test('total should be 0 due to empty amount', () => {
      const item = createCartItem({
        pizza: pizzaMargherita,
        amount: 0,
      })
      const itemPrice = calculatePrice(item)
      expect(itemPrice).toBe(0)
    })
    test('total should be twice the product price', () => {
      const item = createCartItem({
        pizza: pizzaMargherita,
        amount: 2,
      })
      const itemPrice = calculatePrice(item)
      expect(itemPrice).toBe(32)
    })
  })
})
