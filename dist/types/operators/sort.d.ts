import { ImmutableFn, SortCompareFn } from '..';
export default function sort<T>(compareFn?: SortCompareFn<T>): ImmutableFn<Array<T>>;
