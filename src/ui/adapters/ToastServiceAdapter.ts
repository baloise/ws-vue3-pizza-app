import { balToastController } from '@baloise/design-system-components'
import { NotificationService } from '@/core/ports/NotificationService'
import { i18n } from '../plugins/i18n.plugin'

export class ToastServiceAdapter implements NotificationService {
  success() {
    balToastController.create({
      color: 'success',
      message: i18n.global.t('checkout.notification.success'),
      duration: 2000,
    })
  }
}
