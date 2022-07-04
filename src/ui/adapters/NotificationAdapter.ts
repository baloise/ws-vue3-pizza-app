import { balToastController } from '@baloise/design-system-components'
import { NotificationPort } from '@/core/ports/NotificationPort'
import { i18n } from '../plugins/i18n.plugin'

export class NotificationAdapter implements NotificationPort {
  success() {
    balToastController.create({
      color: 'success',
      message: i18n.global.t('checkout.notification.success'),
      duration: 2000,
    })
  }
}
