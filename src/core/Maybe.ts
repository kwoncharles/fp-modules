import Monad from './Monad';

export default class Maybe<T> implements Monad<T> {
  // eslint-disable-next-line
  private constructor(private value: T | null) {}

  static some<T>(value: T) {
    if (!value) {
      throw Error('Provided value must not be empty');
    }
    return new Maybe(value);
  }

  static none<T>() {
    return new Maybe<T>(null);
  }

  static of<T>(value: T) {
    return value ? Maybe.some(value) : Maybe.none<T>();
  }

  private isNothing() {
    return this.value === null || this.value === undefined;
  }

  get() {
    return this.value;
  }

  getOrElse(defaultValue?: T) {
    return this.isNothing() ? defaultValue : this.value;
  }

  map<R>(mapperFn: (wrapped: T) => R): Maybe<R> {
    return this.isNothing()
      ? Maybe.none<R>()
      : Maybe.of(mapperFn(this.value));
  }

  flatMap<R>(mapperFn: (wrapped: T) => Maybe<R>): Maybe<R> {
    return this.isNothing()
      ? Maybe.none<R>()
      : mapperFn(this.value);
  }
}
