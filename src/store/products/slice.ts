import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryType } from 'types/product-category';

type ownDesignProductsStateType = {
  ownDesignProducts: CategoryType[];
  isLoading: boolean;
  hasError: boolean;
};

const initialState: ownDesignProductsStateType = {
  ownDesignProducts: [],
  isLoading: false,
  hasError: false,
};

const NAME = 'ownDesignProducts';

const request: CaseReducer<ownDesignProductsStateType> = (state) => {
  state.isLoading = true;
  state.hasError = false;
};

const success: CaseReducer<
  ownDesignProductsStateType,
  PayloadAction<CategoryType[]>
> = (state, { payload }) => {
  state.isLoading = false;
  state.hasError = false;
  state.ownDesignProducts = payload;
};

const failure: CaseReducer<ownDesignProductsStateType> = (state) => {
  state.isLoading = false;
  state.hasError = true;
};

export const {
  reducer: ownDesignProductsReducer,
  actions: ownDesignProductsActions,
} = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    request,
    success,
    failure,
  },
});
