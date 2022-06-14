import { DomainError } from '@baloise/web-app-clean-architecture'

export class MinShoppingCartItemAmountError extends DomainError {
  constructor(...params: any[]) {
    super('MinShoppingCartItemAmountError', ...params)
  }
}
