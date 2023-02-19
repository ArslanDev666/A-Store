import { RootState } from '..';

export const watchProductSelector = (state: RootState) => state.product;

export const productSelector = (state: RootState) => watchProductSelector(state).product;
export const isLoadingSelector = (state: RootState) => watchProductSelector(state).isLoading;
export const hasErrorSelector = (state: RootState) => watchProductSelector(state).hasError;
