import Id from '@/core/shared/value-objects/Id';

describe('Value Object - Id', () => {
  it('should throw error if create invalid id', () => {
    const execute = () => new Id('123');
    expect(execute).toThrow(new Error('Invalid id!'));
  });
});
