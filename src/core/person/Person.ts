import Id from '../shared/value-objects/Id';
import Cpf from '../shared/value-objects/Cpf';
import PersonName from '../shared/value-objects/PersonName';

export type PersonProps = {
  id?: string;
  cpf: string;
  name: string;
};

export default class Person {
  readonly id: Id;
  readonly cpf: Cpf;
  readonly name: PersonName;
  readonly props: PersonProps;

  constructor(props: PersonProps) {
    this.id = new Id(props.id);
    this.cpf = new Cpf(props.cpf);
    this.name = new PersonName(props.name);
    this.props = { ...props, id: this.id.value };
  }

  clone(props: Partial<PersonProps>) {
    return new Person({ ...this.props, ...props });
  }
}
