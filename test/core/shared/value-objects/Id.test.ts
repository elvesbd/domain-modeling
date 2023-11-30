import Id from '@/core/shared/value-objects/Id';

describe('Value Object - Id', () => {
  it('should throw error if create invalid id', () => {
    const execute = () => new Id('123');
    expect(execute).toThrow(new Error('Invalid id!'));
  });

  it('should create valid id', () => {
    const id = new Id();
    expect(id.value).toBeDefined();
    expect(id.value).toHaveLength(36);
  });
});
