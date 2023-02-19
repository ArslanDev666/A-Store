import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from 'types/product-category';

type OwnDesignStateType = {
  products: CategoryType[];
  isLoading: boolean;
  hasError: boolean;
};

export const initialState: OwnDesignStateType = {
  products: [],
  isLoading: false,
  hasError: false,
};

const NAME = 'own-design';

const request: CaseReducer<OwnDesignStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<OwnDesignStateType, PayloadAction<CategoryType[]>> = (
  state,
  { payload }
) => {
  state.isLoading = false;
  state.hasError = false;
  state.products = payload;
};

const failure: CaseReducer<OwnDesignStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

export const { reducer: ownDesignReducer, actions: ownDesignActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
