export type ImmutableFn<T> = (T) => T;

export type FilterCallbackFn<T> = (
  value: T,
  index?: number,
  array?: T[],
) => boolean;

export type SortCompareFn<T> = (a: T, b: T) => number;
