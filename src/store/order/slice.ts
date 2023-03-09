import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CreateOrderActionType } from './types';

type OrderStateType = {
  isLoading: boolean;
  hasError: boolean;
};

export const initialState: OrderStateType = {
  isLoading: false,
  hasError: false,
};

const NAME = 'order';

const create: CaseReducer<OrderStateType, PayloadAction<CreateOrderActionType>> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<OrderStateType> = (state) => {
  state.isLoading = false;
  state.hasError = false;
};

const failure: CaseReducer<OrderStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

export const { reducer: orderReducer, actions: orderActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    create,
    success,
    failure,
  },
});
