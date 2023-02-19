import { madeInAlfaProductsMock } from 'mocks/data/products';

import { initialState, madeInAlfaActions, madeInAlfaReducer } from '../slice';

describe('slice tests', () => {
  it('should return the initial state', () => {
    expect(madeInAlfaReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test request action', () => {
    expect(madeInAlfaReducer(initialState, madeInAlfaActions.request)).toEqual({
      isLoading: true,
      hasError: false,
      products: initialState.products,
    });
  });

  it('should test success action', () => {
    const products = madeInAlfaProductsMock;

    expect(madeInAlfaReducer(initialState, madeInAlfaActions.success(products))).toEqual({
      isLoading: false,
      hasError: false,
      products: products,
    });
  });

  it('should test failure action', () => {
    expect(madeInAlfaReducer(initialState, madeInAlfaActions.failure())).toEqual({
      isLoading: false,
      hasError: true,
      products: initialState.products,
    });
  });
});
