import Id from '../shared/value-objects/Id';
import PersonName from '../shared/value-objects/PersonName';

export type PersonNameProps = {
  id?: string;
  name: string;
};

export default class Person {
  readonly id: Id;
  readonly name: PersonName;

  constructor(props: PersonNameProps) {
    this.id = new Id(props.id);
    this.name = new PersonName(props.name);
  }
}
