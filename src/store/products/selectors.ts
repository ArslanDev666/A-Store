import { RootState } from '..';

export const watchOwnDesignProductsSelector = (state: RootState) =>
  state.ownDesignProducts;

export const ownDesignProductsSelector = (state: RootState) =>
  watchOwnDesignProductsSelector(state).ownDesignProducts;
export const isLoadingSelector = (state: RootState) =>
  watchOwnDesignProductsSelector(state).isLoading;
export const hasErrorSelector = (state: RootState) =>
  watchOwnDesignProductsSelector(state).hasError;
