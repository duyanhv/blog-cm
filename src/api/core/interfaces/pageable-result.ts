export interface PageableResult<T> {
  readonly data: T[];
  readonly total: number;
}
