import { CartResetUseCase } from '@/core/use-cases/CartResetUseCase'

export function useCartResetUseCase(): CartResetUseCase {
  return new CartResetUseCase()
}
