import { ImmutableFn } from '..';

export default function pipe<T>(...params: Array<ImmutableFn<Array<T>>>) {
  return (arr: Array<T>) => params.reduce((prev, fn) => fn(prev), arr);
}
