import Validator from '@/core/utils/Validator';

describe('Validator', () => {
  it('should be return null if text not null', () => {
    const error = Validator.isNotNull('Good morning', 'error');
    expect(error).toBeNull();
  });

  it('should be return error if text is null', () => {
    const error = Validator.isNotNull(null, 'error');
    expect(error).not.toBeNull();
    expect(error).toBe('error');
  });

  it('should be return null if text is not empty', () => {
    const error = Validator.isNotEmpty('Good morning', 'error');
    expect(error).toBeNull();
  });

  it('should be return error if text is empty', () => {
    const error = Validator.isNotEmpty('     ', 'error');
    expect(error).not.toBeNull();
    expect(error).toBe('error');
  });

  it('should be return null if text less than max length', () => {
    const error = Validator.isLessThan('test', 6, 'error');
    expect(error).toBeNull();
  });

  it('should be return error if text more than max length', () => {
    const error = Validator.isLessThan('test error', 6, 'error');
    expect(error).not.toBeNull();
    expect(error).toBe('error');
  });
});
