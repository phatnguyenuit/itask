import { AsyncState } from 'types/common';
import { getEnv } from 'utils/common';

// NUMBERS
export const NETWORK_TIMEOUT = 30000;

// STRINGS
export const ITASK_API_URL = getEnv('REACT_APP_ITASK_URL');

export const APP_NAME = 'iTask - Task Management';
export const NETWORK_TIMEOUT_MESSAGE = 'Network Timeout';

// OBJECTS
export const PENDING_STATE: AsyncState<any, any> = { loading: false };
export const LOADING_STATE: AsyncState<any, any> = { loading: true };
