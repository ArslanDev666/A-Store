import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductType } from 'types/product';

type MadeInAlfaStateType = {
  products: ProductType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: MadeInAlfaStateType = {
  products: [],
  isLoading: false,
  hasError: false,
};

const NAME = 'made-in-alfa';

const request: CaseReducer<MadeInAlfaStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<
  MadeInAlfaStateType,
  PayloadAction<ProductType[]>
> = (state, { payload }) => {
  state.isLoading = false;
  state.hasError = false;
  state.products = payload;
};

const failure: CaseReducer<MadeInAlfaStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

export const { reducer: madeInAlfaReducer, actions: madeInAlfaActions } =
  createSlice({
    name: NAME,
    initialState: initialState,
    reducers: {
      request,
      success,
      failure,
    },
  });
