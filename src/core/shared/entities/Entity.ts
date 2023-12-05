import Id from '../value-objects/Id';

export type EntityProps = {
  id?: string;
};

export default abstract class Entity<T extends EntityProps> {
  readonly id: Id;
  readonly props: T;

  constructor(props: T) {
    this.id = new Id(props.id);
    this.props = { ...props, id: this.id.value };
  }

  isEquals(entity: Entity<T>): boolean {
    return this.id.isEquals(entity?.id);
  }

  isDifferent(entity: Entity<T>): boolean {
    return this.id.isDifferent(entity?.id);
  }
}
