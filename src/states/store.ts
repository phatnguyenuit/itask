import createStore from 'utils/state/createStore';
import helloSlice from './hello';

const store = createStore({ hello: helloSlice });

export default store;
export type RootState = ReturnType<typeof store['getState']>;
