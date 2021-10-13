import createSlice from 'utils/state/createSlice';

interface HelloState {
  message: string;
}

export const buildHelloState: StateBuilder<HelloState> = (overrides = {}) => ({
  message: '',
  ...overrides,
});

export const initialState: HelloState = buildHelloState();

const helloSlice = createSlice({
  name: 'hello',
  initialState,
  reducers: {
    hello: (state, payload: string) => ({
      ...state,
      message: payload,
    }),
  },
});

export default helloSlice;

export const { hello } = helloSlice.actions;
