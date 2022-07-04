import { Router } from 'vue-router'
import { RouterPort } from '@/core/ports/RouterPort'

export class VueRouterAdapter implements RouterPort {
  constructor(private readonly router: Router) {}

  async goToHome() {
    await this.router.push({ name: 'Home' })
  }

  async goToCheckout() {
    await this.router.push({ name: 'Checkout' })
  }
}
