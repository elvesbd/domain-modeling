import Errors from '@/core/constants/Errors';
import User from '@/core/user/User';

const user = () => new User(123, 'John Doe', 'john@mail.com', '123456');

it('should be create an user without name', () => {
  const userWithOutName: User = user();
  userWithOutName.name = '';
  expect(userWithOutName.name).toBe('');
});

it('should be create an user with negative id', () => {
  const userWithNegativeId: User = user();
  userWithNegativeId.id = -123;
  expect(userWithNegativeId.id).toBe(-123);
});

it('should be create an user with invalid email', () => {
  const userWithInvalidEmail: User = user();
  userWithInvalidEmail.email = 'mail.com.br';
  expect(userWithInvalidEmail.email).toBe(userWithInvalidEmail.email);
});

it('should be set a correct email if valid email', () => {
  const userWithValidPassword: User = user();
  userWithValidPassword.email = 'elves@mail.com';
  expect(userWithValidPassword.email).toBe('elves@mail.com');
});

it('should be throw error if password has password less than six characters', () => {
  const userWithInvalidPassword: User = user();
  expect(() => (userWithInvalidPassword.password = 'a')).toThrow(
    Errors.INVALID_PASSWORD
  );
});

it('should be set a correct password if more than six characters', () => {
  const userWithValidPassword: User = user();
  userWithValidPassword.password = 'abcdefg';
  expect(userWithValidPassword.password).toBe('abcdefg');
});
