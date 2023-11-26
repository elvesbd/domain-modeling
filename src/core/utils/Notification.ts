import { ErrorKey } from './Notifications/types/ErrorKey';
import { errorMessages } from './Notifications/constants/error-messages';

export default class Notification {
  static notifications(
    ...errors: (string | null)[]
  ): string[] | null {
    const filterErrors = errors.filter(
      (error) => error !== null
    ) as string[];
    return filterErrors.length > 0 ? filterErrors : null;
  }

  static isNull(
    value: any,
    errorKey: ErrorKey = 'required'
  ): string | null {
    return value === null || value === undefined
      ? errorMessages[errorKey]
      : null;
  }

  static isEmpty(
    value: string,
    errorKey: ErrorKey = 'empty'
  ): string | null {
    if (Notification.isNull(value, 'required'))
      return errorMessages[errorKey];
    return value.trim() === '' ? errorMessages[errorKey] : null;
  }

  static isLessThan(
    value: string | any[],
    maxLength: number,
    errorKey: ErrorKey = 'maxLength'
  ): string | null {
    const errorMessage = errorMessages[errorKey].replace(
      '{0}',
      maxLength.toString()
    );
    return value.length < maxLength ? null : errorMessage;
  }

  static isValidEmail(
    email: string,
    errorKey: ErrorKey = 'invalidEmail'
  ): string | null {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email) ? null : errorMessages[errorKey];
  }
}
