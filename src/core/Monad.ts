import Functor from './Functor';

export default interface Monad<T> extends Functor<T> {
  flatMap<R>(mapperFn: (wrapped: T) => Monad<R>): Monad<R>;
}
