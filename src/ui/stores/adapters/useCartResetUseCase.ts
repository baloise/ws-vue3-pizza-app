import { CartResetUseCase } from '@/core/use-cases/CartReset.case'

export function useCartResetUseCase(): CartResetUseCase {
  return new CartResetUseCase()
}
