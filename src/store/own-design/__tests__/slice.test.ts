import { ownDesignProductsWithCategoryMock } from 'mocks/data/products';

import { initialState, ownDesignActions, ownDesignReducer } from '../slice';

describe('slice tests', () => {
  it('should return the initial state', () => {
    expect(ownDesignReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test request action', () => {
    expect(ownDesignReducer(initialState, ownDesignActions.request)).toEqual({
      isLoading: true,
      hasError: false,
      products: initialState.products,
    });
  });

  it('should test success action', () => {
    const products = ownDesignProductsWithCategoryMock;

    expect(ownDesignReducer(initialState, ownDesignActions.success(products))).toEqual({
      isLoading: false,
      hasError: false,
      products: products,
    });
  });

  it('should test failure action', () => {
    expect(ownDesignReducer(initialState, ownDesignActions.failure())).toEqual({
      isLoading: false,
      hasError: true,
      products: initialState.products,
    });
  });
});
