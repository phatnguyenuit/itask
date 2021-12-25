import BaseService, { TransformData, BaseRequestConfig } from './base';
import authService from 'services/auth';
import { BaseResponse } from 'types/common';

const buildConfig = ({
  headers,
  withAuthorization = true,
  ...restConfig
}: BackendRequestConfig) => {
  let requestHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...headers,
  };

  if (withAuthorization) {
    const authData = authService.getAuthData();
    const token = authData?.token;
    requestHeaders = { ...requestHeaders, 'x-access-token': `${token}` };
  }

  const requestConfig: BaseRequestConfig = {
    ...restConfig,
    headers: requestHeaders,
  };

  return requestConfig;
};

const checkAuthorization = ({ code }: BaseResponse) => {
  if (code.toString().match(/^40[13]/)) {
    // Give a chance for components handling error before unmount
    setTimeout(() => authService.logout());
  }
};

export default abstract class BackendService extends BaseService {
  protected async request<TResponseData, TResultData = TResponseData>(
    config: BackendRequestConfig,
    transformData?: TransformData<TResponseData, TResultData>,
  ) {
    const res = await this.requestData<TResponseData, TResultData>(
      buildConfig(config),
      transformData,
    );
    checkAuthorization(res);
    return res;
  }
}

export interface BackendRequestConfig extends BaseRequestConfig {
  withAuthorization?: boolean;
}
