import CpfRegion from '@/core/shared/value-objects/CpfRegion';

describe('Value Object - CpfRegion', () => {
  it('ensures that returns the RS region to region code 0', () => {
    const regionCode = 0;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('RS');
  });

  it('ensures that returns the RS region if the cpf entered belongs to region 0', () => {
    const cpf = '345.799.510-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('RS');
  });

  it('ensures that returns the DF region to region code 1', () => {
    const regionCode = 1;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('DF');
  });

  it('ensures that returns the DF region if the cpf entered belongs to region 1', () => {
    const cpf = '345.799.511-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('DF');
  });

  it('ensures that returns the GO region to region code 1', () => {
    const regionCode = 1;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('GO');
  });

  it('ensures that returns the GO region if the cpf entered belongs to region 1', () => {
    const cpf = '345.799.511-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('GO');
  });

  it('ensures that returns the MS region to region code 1', () => {
    const regionCode = 1;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('MS');
  });

  it('ensures that returns the MS region if the cpf entered belongs to region 1', () => {
    const cpf = '345.799.511-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('MS');
  });

  it('ensures that returns the MT region to region code 1', () => {
    const regionCode = 1;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('MT');
  });

  it('ensures that returns the MT region if the cpf entered belongs to region 1', () => {
    const cpf = '345.799.511-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('MT');
  });

  it('ensures that returns the TO region to region code 1', () => {
    const regionCode = 1;
    const region = CpfRegion.getByCode(regionCode);

    expect(region.code).toBe(regionCode);
    expect(region.states).toContain('TO');
  });

  it('ensures that returns the TO region if the cpf entered belongs to region 1', () => {
    const cpf = '345.799.511-93';
    const region = CpfRegion.getByCpf(cpf);

    expect(region.states).toContain('TO');
  });
});
