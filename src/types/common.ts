import { RouteProps } from 'react-router-dom';
import { FontIconType } from './fontIcons';

export interface GenericFunction<TArgs extends any[] = [], TReturn = void> {
  (...args: TArgs): TReturn;
}

export interface FunctionReturns<TReturn>
  extends GenericFunction<[], TReturn> {}

export interface StoreServiceState {
  readonly loading?: boolean;
}

export interface ServiceErrorState {
  code?: number;
  message?: string;
}

export type AsyncServiceState<TData> = { data?: TData } & StoreServiceState &
  ServiceErrorState;

export interface ServerResponse<TData = unknown> {
  data: TData;
  message: string;
}

export interface SuccessResponse<TData = unknown> {
  kind: 'success';
  data: TData;
  code: number;
  message: string;
}

export interface FailResponse {
  kind: 'failed';
  data: ServiceErrorState;
  code: number;
  message: string;
}

export type BaseResponse<TData = unknown> =
  | FailResponse
  | SuccessResponse<TData>;

export type AsyncState<TResult = unknown, TError = unknown> =
  | { loading: boolean; result?: undefined; error?: undefined }
  | { loading: false; result: TResult; error?: undefined }
  | { loading: false; result?: undefined; error: TError };

export type ValueFactory<TValue> = TValue | FunctionReturns<TValue>;

export interface AuthInfo {
  role?: string;
}

export interface LinkInfo extends AuthInfo {
  icon: FontIconType;
  title: string;
  path: string;
  shortPath: string;
}

export interface RouteInfo extends LinkInfo, OmitFrom<RouteProps, 'path'> {
  isProtected?: boolean;
  childRoutes?: RouteInfo[];
}
