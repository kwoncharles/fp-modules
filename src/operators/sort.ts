import { ImmutableFn, SortCompareFn } from '..';

export default function sort<T>(compareFn?: SortCompareFn<T>): ImmutableFn<Array<T>> {
  return (array: Array<T>) => [...array.sort(compareFn)];
}
