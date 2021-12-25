import { BaseResponse, SuccessResponse } from 'types/common';

export const getEnv = (key: string, defaultValue?: string) => {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`Environment variable named "${key}" is not defined.`);
  }

  return value;
};

export function isSuccessResponse<TData>(
  res: BaseResponse<TData>,
): res is SuccessResponse<TData> {
  return res.kind === 'success';
}
