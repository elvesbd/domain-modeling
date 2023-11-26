import Errors from '@/core/constants/Errors';
import Notification from '@/core/utils/Notification';

export default class PersonName {
  readonly name: string;

  constructor(name: string) {
    this.name = name.trim();

    Notification.isEmpty(this.name, Errors.EMPTY_NAME);
  }
}
