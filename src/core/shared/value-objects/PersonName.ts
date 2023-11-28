import Notification from '@/core/utils/Notifications';

export default class PersonName {
  readonly name: string;

  constructor(name: string) {
    this.name = name.trim();

    const errors = Notification.notifications(
      Notification.isEmpty(this.name),
      Notification.isLessThan(this.name, 4),
      Notification.isMoreThan(this.name, 120),
      Notification.isOnlyLetters(this.name)
    );

    if (errors) throw new Error(errors.join(','));
  }
}
