import { DependencyList } from 'react';
import { AsyncState, BaseResponse } from 'types/common';
import usePromise from './usePromise';

export const getState = <TData>({
  result,
  loading,
}: AsyncState<BaseResponse<TData>>) => ({
  loading,
  data: result?.kind === 'success' ? result.data : undefined,
  error: result?.kind === 'failed' ? result.message : undefined,
  success: result?.kind === 'success' ? result.message : undefined,
});

const useBackendService = <TData>(
  promiseFactory: ReturnedFunction<Nullable<Promise<BaseResponse<TData>>>>,
  deps: DependencyList = [],
) => {
  const state = usePromise(promiseFactory, deps);
  return getState(state);
};

export default useBackendService;
