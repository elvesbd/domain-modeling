import Notification from '@/core/utils/Notification';

export default class PersonName {
  readonly name: string;

  constructor(name: string) {
    this.name = name.trim();

    const errors = Notification.notifications(
      Notification.isEmpty(this.name)
    );

    if (errors) throw new Error(errors.join(','));
  }
}
