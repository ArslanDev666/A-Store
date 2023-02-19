import { productMock } from 'mocks/data/product';

import { initialState, productActions, productReducer } from '../slice';

describe('slice tests', () => {
  it('should return the initial state', () => {
    expect(productReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test request action', () => {
    expect(productReducer(initialState, productActions.request)).toEqual({
      isLoading: true,
      hasError: false,
      product: initialState.product,
    });
  });

  it('should test success action', () => {
    const product = productMock;

    expect(productReducer(initialState, productActions.success(product))).toEqual({
      isLoading: false,
      hasError: false,
      product: product,
    });
  });

  it('should test failure action', () => {
    expect(productReducer(initialState, productActions.failure())).toEqual({
      isLoading: false,
      hasError: true,
      product: initialState.product,
    });
  });

  it('should test reset action', () => {
    expect(productReducer(initialState, productActions.reset())).toEqual({
      isLoading: false,
      hasError: false,
      product: initialState.product,
    });
  });
});
