import { defineStore } from 'pinia'
import { Pizza } from '@/core/models/Pizza'
import { usePizzaGetAllUseCase } from './factories/usePizzaGetAllUseCase'

export const usePizzaStore = defineStore('pizza', {
  state: () => {
    return {
      items: [] as Pizza[],
      loading: false,
      failed: false,
    }
  },
  actions: {
    async load() {
      this.loading = true
      this.failed = false

      const useCase = usePizzaGetAllUseCase()
      const result = await useCase.execute()

      this.loading = false
      this.failed = result.isFailure

      if (result.isSuccess) {
        this.items = result.value()
      }
    },
  },
})
