import Validator from '@/core/utils/Validator';

describe('Validator', () => {
  const errorMessage = 'Invalid Text!';

  it('should be return null if text not null', () => {
    const error = Validator.isNotNull('Good morning', errorMessage);
    expect(error).toBeNull();
  });

  it('should be return error if text is null', () => {
    const error = Validator.isNotNull(null, errorMessage);
    expect(error).not.toBeNull();
    expect(error).toBe(errorMessage);
  });
});
