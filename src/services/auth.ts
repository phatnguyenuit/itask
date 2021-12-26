/* eslint-disable no-underscore-dangle */
import jwtDecode from 'jwt-decode';
import memoizeOne from 'memoize-one';

import { ITASK_API_URL } from 'constants/common';
import { LoginRequestData, LoginResponseData } from 'types/auth';
import { isSuccessResponse } from 'utils/common';

import BaseService from './base';
import { encrypt, decrypt } from './crypto';
import storageService from './storage';

class AuthService extends BaseService {
  get storageKey() {
    return this._storageKey;
  }

  constructor(private _storageKey: string) {
    super({ baseURL: `${ITASK_API_URL}/api` });
  }

  decodeToken = (token: string): AuthData | undefined => {
    try {
      const { role } = jwtDecode<TokenPayload>(token);
      return {
        role,
        token,
      };
    } catch (error) {
      return undefined;
    }
  };

  getAuthData = (): AuthData | undefined => {
    const encryptedToken = this.getEncryptedToken();

    if (!encryptedToken) return undefined;

    const authData = this.parseEncryptedToken(encryptedToken);

    if (!authData) this.logout();

    return authData;
  };

  isAuthenticated = () => {
    const authData = this.getAuthData();
    return !!authData;
  };

  login = async ({ email, password }: LoginRequestData) => {
    const res = await this.requestData<LoginResponseData>({
      url: '/v1/auth/login',
      data: { email, password },
      method: 'POST',
    });

    if (isSuccessResponse(res)) {
      const { accessToken } = res.data;

      if (accessToken) {
        const encryptedToken = encrypt(accessToken);
        this.setEncryptedToken(encryptedToken);
      }
    }

    return res;
  };

  logout = () => {
    this.removeEncryptedToken();
  };

  parseEncryptedToken = memoizeOne((encryptedToken: string) => {
    try {
      const token = decrypt(encryptedToken);
      const authData = this.decodeToken(token);
      if (authData) return authData;
    } catch {
      // Do nothing
    }
    return undefined;
  });

  private getEncryptedToken() {
    return storageService.getItem<string>(this._storageKey);
  }

  private removeEncryptedToken() {
    return storageService.removeItem(this._storageKey);
  }

  private setEncryptedToken(token: string) {
    storageService.setItem(this._storageKey, token);
  }
}

const authService = new AuthService('as');

export default authService;

export interface AuthData {
  role: string;
  token: string;
}

interface TokenPayload {
  exp: number;
  role: string;
}
