export default class Validator {
  static isNotNull(value: any, error: string): string | null {
    return value !== null && value !== undefined ? null : error;
  }

  static isNotEmpty(value: string, error: string): string | null {
    if (Validator.isNotNull(value, error)) return error;
    return value.trim() !== '' ? null : error;
  }

  static isLessThan(
    value: string | any[],
    maxLength: number,
    error: string
  ): string | null {
    return value.length < maxLength ? null : error;
  }

  static isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
  }
}
