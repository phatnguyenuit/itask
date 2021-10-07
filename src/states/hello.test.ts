import helloSlice, { initialState } from './hello';

describe('helloSlice', () => {
  it('should hello', () => {
    const action = helloSlice.actions.hello('Fast');
    const nextState = helloSlice.reducer(initialState, action);

    expect(nextState.message).toEqual('Fast');
  });
});
