import {
  ReducerObject,
  ReducerSettings,
  SliceObject,
  SliceReducersBase,
  SliceSettings,
} from 'types/state';

import createReducerObject from './createReducerObject';
import createSliceObject from './createSliceObject';

const isSliceSettings = (
  settings: SliceSettings<any, any, any> | ReducerSettings<any, any>,
): settings is SliceSettings<any, any, any> =>
  !!settings && !!(settings as SliceSettings<any, any, any>).reducers;

function createSlice<
  TName extends string,
  TState,
  TSliceReducers extends SliceReducersBase<TState>,
>(
  settings: SliceSettings<TName, TState, TSliceReducers>,
): SliceObject<TName, TState, TSliceReducers>;
function createSlice<TName extends string, TState>(
  settings: ReducerSettings<TName, TState>,
): ReducerObject<TName, TState>;
function createSlice(
  settings: SliceSettings<any, any, any> | ReducerSettings<any, any>,
) {
  return isSliceSettings(settings)
    ? createSliceObject(settings)
    : createReducerObject(settings);
}

export default createSlice;
