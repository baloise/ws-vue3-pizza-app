import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import { CartItem } from '@/core/models/CartItem'
import { calculateTotal, countItems } from '@/core/models/Cart'
import { Pizza } from '@/core/models/Pizza'
import { useCartAddPizzaUseCase } from './adapters/useCartAddPizzaUseCase'
import { useCartRemovePizzaUseCase } from './adapters/useCartRemovePizzaUseCase'
import { useCartResetUseCase } from './adapters/useCartResetUseCase'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      items: useStorage<CartItem[]>('cart-items', []),
      loading: false,
      failed: false,
    }
  },
  getters: {
    amount: (state) => countItems(state),
    total: (state) => calculateTotal(state),
  },
  actions: {
    async addPizza(pizza: Pizza) {
      const useCase = useCartAddPizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        this.items = result.value()
      }
    },
    async removePizza(pizza: Pizza) {
      const useCase = useCartRemovePizzaUseCase()
      const result = await useCase.execute({ pizza, items: this.items })

      if (result.isSuccess) {
        this.items = result.value()
      }
    },
    async reset() {
      const useCase = useCartResetUseCase()
      const result = await useCase.execute()

      if (result.isSuccess) {
        const { items } = result.value()
        this.items = items
      }
    },
  },
})
