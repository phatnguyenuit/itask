import createSlice from 'utils/state/createSlice';

interface HelloState {
  message: string;
}

const initialState: HelloState = { message: '' };

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    hello: (state: HelloState, payload: string) => ({
      ...state,
      message: payload,
    }),
  },
});

export default helloSlice;

export const { hello } = helloSlice.actions;
