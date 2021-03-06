import { defineStore } from 'pinia'
import { Order, useOrderDefaults } from '@/core/models/Order'
import { CartItem } from '@/core/models/CartItem'
import { useOrderCheckoutUseCase } from './factories/useOrderCheckoutUseCase'
import { useOrderSubmitUseCase } from './factories/useOrderSubmitUseCase'

export const useOrderStore = defineStore('order', {
  state: () => {
    return {
      order: useOrderDefaults(),
      loading: false,
      failed: false,
    }
  },
  actions: {
    async checkout(items: CartItem[]) {
      const useCase = useOrderCheckoutUseCase(this.router)
      const result = await useCase.execute({ items })

      if (result.isSuccess) {
        const { order } = result.value()
        this.order = order
      }
    },
    async submit(order: Order, items: CartItem[]) {
      this.loading = true
      this.failed = false

      const useCase = useOrderSubmitUseCase(this.router)
      const result = await useCase.execute({ order, items })

      this.loading = false
      this.failed = result.isFailure

      if (result.isSuccess) {
        const { order: newOrder } = result.value()
        this.order = newOrder
      }
    },
  },
})
