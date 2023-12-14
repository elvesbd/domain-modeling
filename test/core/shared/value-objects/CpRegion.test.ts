import CpfRegion from '@/core/shared/value-objects/CpfRegion';

describe('Value Object - CpfRegion', () => {
  it('ensures that it returns the RS region to region code 0', () => {
    const regionCode = 0;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states[0]).toBe('RS');
  });
});
