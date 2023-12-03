import Person, { PersonNameProps } from '@/core/person/Person';

describe('Domain - Person', () => {
  it('should create name on success', () => {
    const props: PersonNameProps = {
      name: 'Elvis Presley',
      cpf: '280.012.389-38',
    };
    const person = new Person(props);
    expect(person.id.value).toBeDefined();
    expect(person.name.fullName).toBe('Elvis Presley');
    expect(person.cpf.value).toBe('280.012.389-38');
  });
});
