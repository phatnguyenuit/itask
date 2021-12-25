import { AES, enc } from 'crypto-js';
import { getEnv } from 'utils/common';

const REACT_APP_SECRET_KEY = getEnv('REACT_APP_SECRET_KEY');

export const encrypt = (text: string) =>
  AES.encrypt(text, REACT_APP_SECRET_KEY).toString();

export const decrypt = (text: string) =>
  AES.decrypt(text, REACT_APP_SECRET_KEY).toString(enc.Utf8);
