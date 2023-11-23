export default class Validator {
  static isNotNull(value: any, error: string): string | null {
    return value !== null && value !== undefined ? null : error;
  }

  static isValidEmail(email: string): boolean {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    return regex.test(email);
  }
}
