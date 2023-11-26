import PersonName from '@/core/shared/value-objects/PersonName';
import { errorMessages } from '@/core/utils/Notifications/constants/error-messages';

describe('Value Object - PersonName', () => {
  it('should throw error if empty name', () => {
    const createEmptyPersonName = () => new PersonName('');
    expect(createEmptyPersonName).toThrow(errorMessages.empty);
  });

  it('should throw error if name less than 4 characters', () => {
    const shortName = 'Joh';
    const createShortPersonName = () => new PersonName(shortName);
    const expectedErrorMessage = errorMessages.minLength.replace(
      '{0}',
      '4'
    );

    expect(createShortPersonName).toThrow(expectedErrorMessage);
  });

  it('should throw error if name more than 120 characters', () => {
    const longName =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
    const createLongPersonName = () => new PersonName(longName);
    const expectedErrorMessage = errorMessages.maxLength.replace(
      '{0}',
      '120'
    );

    expect(createLongPersonName).toThrow(expectedErrorMessage);
  });
});
