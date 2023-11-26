import PersonName from '@/core/shared/value-objects/PersonName';
import { errorMessages } from '@/core/utils/Notifications/constants/error-messages';

describe('Value Object - PersonName', () => {
  it('should throw error if empty name', () => {
    const createEmptyPersonName = () => new PersonName('');
    expect(createEmptyPersonName).toThrow(errorMessages.empty);
  });
});
