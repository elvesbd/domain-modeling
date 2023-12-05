import Person, { PersonProps } from '@/core/person/Person';

describe('Domain - Person', () => {
  const props: PersonProps = {
    name: 'Elvis Presley',
    cpf: '280.012.389-38',
  };

  it('should create name on success', () => {
    const person = new Person(props);
    expect(person.id.value).toBeDefined();
    expect(person.name.fullName).toBe('Elvis Presley');
    expect(person.cpf.value).toBe('280.012.389-38');
  });

  it('should be clone object with name updated', () => {
    const person = new Person(props);
    const newPerson = person.clone({ name: 'Elvis Brito' });

    expect(newPerson.id.value).toBe(person.id.value);
    expect(newPerson.cpf.value).toBe(person.cpf.value);
    expect(newPerson.name.fullName).not.toBe(person.name.fullName);
    expect(newPerson.name.fullName).toBe('Elvis Brito');
  });
});
