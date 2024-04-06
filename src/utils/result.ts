import { NullAble } from './base';

export class BaseResult<T> {
  data: T;
  error: NullAble<Error>;

  constructor(data: T, error: NullAble<Error>) {
    this.data = data;
    this.error = error;
  }

  isSuccess(): boolean {
    return !!this.data;
  }

  isError(): boolean {
    return !!this.error;
  }

  get(): T {
    return this.data;
  }

  exception(): Error {
    return this.error!;
  }
}

export type Result<T> = BaseResult<T> | BaseResult<null>;

export async function result<T>(block: () => Promise<T>): Promise<Result<T>> {
  try {
    const res = await block();
    return new BaseResult(res, null);
  } catch (error) {
    return new BaseResult(null, error as Error);
  }
}

export function success<T>(data: T): Result<T> {
  return new BaseResult(data, null);
}

export function error(e: Error): Result<any> {
  return new BaseResult(null, e);
}

export function asResult<T>(source: any): Result<T> {
  return (source as unknown) as Result<T>;
}
