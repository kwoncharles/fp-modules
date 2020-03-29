export default interface Functor<T> {
    map<R>(mapperFn: (wrapped: T) => R): Functor<R>;
}
