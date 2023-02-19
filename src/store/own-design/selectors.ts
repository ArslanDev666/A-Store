import { RootState } from '..';

export const watchOwnDesignSelector = (state: RootState) => state.ownDesign;

export const ownDesignSelector = (state: RootState) => watchOwnDesignSelector(state).products;
export const ownDesignIsLoadingSelector = (state: RootState) =>
  watchOwnDesignSelector(state).isLoading;
export const ownDesignHasErrorSelector = (state: RootState) =>
  watchOwnDesignSelector(state).hasError;
