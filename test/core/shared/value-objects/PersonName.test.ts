import PersonName from '@/core/shared/value-objects/PersonName';
import { errorMessages } from '@/core/utils/Notifications/constants/error-messages';

describe('Value Object - PersonName', () => {
  it('should throw error if empty name', () => {
    const createEmptyPersonName = () => new PersonName('');
    expect(createEmptyPersonName).toThrow(errorMessages.empty);
  });

  it('should throw error if name less than four characters', () => {
    const createShortPersonName = () => new PersonName('Joh');
    const expectedErrorMessage = errorMessages.minLength.replace(
      '{0}',
      '4'
    );

    expect(createShortPersonName).toThrow(expectedErrorMessage);
  });
});
