import { RootState } from '..';

export const watchMadeInAlfaSelector = (state: RootState) => state.madeInAlfa;

export const madeInAlfaSelector = (state: RootState) => watchMadeInAlfaSelector(state).products;
export const madeInAlfaIsLoadingSelector = (state: RootState) =>
  watchMadeInAlfaSelector(state).isLoading;
export const madeInAlfaHasErrorSelector = (state: RootState) =>
  watchMadeInAlfaSelector(state).hasError;
