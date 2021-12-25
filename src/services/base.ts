import Axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';

import { NETWORK_TIMEOUT, NETWORK_TIMEOUT_MESSAGE } from 'constants/common';
import {
  BaseResponse,
  ServiceErrorState,
  SuccessResponse,
  ServerResponse,
} from 'types/common';
import toastService from './toast';

const getErrorCodeAndMessage = (error: AxiosError<any>) => ({
  code: error?.response?.status || 0,
  message: error.response?.data?.message || error?.message || 'Unknown error',
});

export default abstract class BaseService {
  private readonly instance: AxiosInstance;

  private readonly cachedResponses: Record<string, SuccessResponse<unknown>> =
    {};

  constructor(config?: AxiosRequestConfig) {
    this.instance = Axios.create(config);
  }

  protected requestData = async <TResponseData, TResultData = TResponseData>(
    {
      cacheKey,
      shouldNotifyError = true,
      shouldNotifySuccess = false,
      timeout = NETWORK_TIMEOUT,
      timeoutErrorMessage = NETWORK_TIMEOUT_MESSAGE,
      ...rest
    }: BaseRequestConfig,
    transformData?: TransformData<TResponseData, TResultData>,
  ): Promise<BaseResponse<TResultData>> => {
    if (cacheKey) {
      const cachedRes = this.cachedResponses[cacheKey];
      if (cachedRes) return cachedRes as SuccessResponse<TResultData>;
    }

    let code: number;
    let message: string;
    let data: unknown;

    try {
      const res = await this.instance.request<ServerResponse<TResponseData>>({
        timeout,
        timeoutErrorMessage,
        ...rest,
      });

      ({ data, message } = res.data);

      const resData = res.data.data;
      const resultData = (
        transformData ? await transformData(resData) : resData
      ) as TResultData;

      // Show toast success
      if (shouldNotifySuccess) {
        toastService.notify(message, 'success');
      }

      const successResponse: SuccessResponse<TResultData> = {
        message,
        kind: 'success',
        data: resultData,
        code: res.status,
      };

      // Save cache response to cache key
      if (cacheKey) {
        this.cachedResponses[cacheKey] = successResponse;
      }

      return successResponse;
    } catch (error) {
      ({ code, message } = getErrorCodeAndMessage(error as AxiosError));
      data = { code, message };

      // Show toast error
      if (shouldNotifyError) {
        toastService.notify(message, 'error');
      }
    }

    return {
      code,
      message,
      kind: 'failed',
      data: data as ServiceErrorState,
    };
  };
}

export interface BaseRequestConfig extends AxiosRequestConfig {
  shouldNotifyError?: boolean;
  shouldNotifySuccess?: boolean;
  cacheKey?: string;
}

export type TransformData<TFrom, TTo> = (data: TFrom) => TTo | Promise<TTo>;
