import Monad from './Monad';
export default class Maybe<T> implements Monad<T> {
    private value;
    private constructor();
    static some<T>(value: T): Maybe<T>;
    static none<T>(): Maybe<T>;
    static of<T>(value: T): Maybe<T>;
    private isNothing;
    get(): T;
    getOrElse(defaultValue?: T): T;
    map<R>(mapperFn: (wrapped: T) => R): Maybe<R>;
    flatMap<R>(mapperFn: (wrapped: T) => Maybe<R>): Maybe<R>;
}
