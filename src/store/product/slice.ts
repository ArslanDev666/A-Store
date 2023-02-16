import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CustomProductType, ProductType } from 'types/product';

import { getProductPayloadType } from './types';

export type StateProductType = ProductType | CustomProductType | null;

type ProductStateType = {
  product: StateProductType;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: ProductStateType = {
  product: null,
  isLoading: false,
  hasError: false,
};

const NAME = 'product';

const request: CaseReducer<
  ProductStateType,
  PayloadAction<getProductPayloadType>
> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<
  ProductStateType,
  PayloadAction<StateProductType>
> = (state, { payload }) => {
  state.isLoading = false;
  state.hasError = false;
  state.product = payload;
};

const failure: CaseReducer<ProductStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

export const { reducer: productReducer, actions: productActions } = createSlice(
  {
    name: NAME,
    initialState: initialState,
    reducers: {
      request,
      success,
      failure,
    },
  }
);
