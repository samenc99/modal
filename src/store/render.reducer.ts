import { createSlice } from '@reduxjs/toolkit';
import { initialState, RenderState } from './state/render/render.state';
import { Actions, getReducers } from './get-reducers';

export const renderSlice = createSlice({
  name: 'render',
  initialState,
  reducers: getReducers(initialState),
});

export const renderActions = renderSlice.actions as Actions<RenderState>;

export default renderSlice.reducer;
