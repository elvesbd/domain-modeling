import CpfRegion from '@/core/shared/value-objects/CpfRegion';

describe('Value Object - CpfRegion', () => {
  it('ensures that returns the RS region to region code 0', () => {
    const regionCode = 0;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states[0]).toBe('RS');
  });

  it('ensures that returns the RS region if the cpf entered belongs to region 0', () => {
    const cpf = '345.799.510-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states[0]).toBe('RS');
  });
});
