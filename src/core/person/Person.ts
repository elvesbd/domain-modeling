import Id from '../shared/value-objects/Id';
import Cpf from '../shared/value-objects/Cpf';
import PersonName from '../shared/value-objects/PersonName';

export type PersonNameProps = {
  id?: string;
  cpf: string;
  name: string;
};

export default class Person {
  readonly id: Id;
  readonly cpf: Cpf;
  readonly name: PersonName;

  constructor(props: PersonNameProps) {
    this.id = new Id(props.id);
    this.cpf = new Cpf(props.cpf);
    this.name = new PersonName(props.name);
  }
}
