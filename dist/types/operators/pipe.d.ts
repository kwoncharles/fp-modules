import { ImmutableFn } from '..';
export default function pipe<T>(...params: Array<ImmutableFn<Array<T>>>): (arr: T[]) => T[];
