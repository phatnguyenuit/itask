export interface StoreServiceState {
  readonly loading?: boolean;
}

export interface ServiceErrorState {
  code?: number;
  message?: string;
}

export type AsyncServiceState<TData> = { data?: TData } & StoreServiceState &
  ServiceErrorState;
