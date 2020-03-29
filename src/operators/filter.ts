import { FilterCallbackFn, ImmutableFn } from '..';

export default function filter<T>(callbackfn: FilterCallbackFn<T>): ImmutableFn<Array<T>> {
  return (array: Array<T>) => [...array.filter(callbackfn)];
}
