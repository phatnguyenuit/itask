import { DependencyList } from 'react';
import { BaseResponse } from 'types/common';
import usePromiseCallback from './usePromiseCallback';
import { getState } from './useBackendService';

const useBackendServiceCallback = <TArgs extends any[], TData>(
  promiseFactory: TypedFunction<TArgs, Nullable<Promise<BaseResponse<TData>>>>,
  deps: DependencyList = [],
) => {
  const [state, callback] = usePromiseCallback(promiseFactory, deps);
  const serviceState = getState(state);
  return [serviceState, callback] as const;
};

export default useBackendServiceCallback;
