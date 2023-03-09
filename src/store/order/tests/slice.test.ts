import { orderMock } from 'mocks/data/order';

import { initialState, orderActions, orderReducer } from '../slice';

describe('slice tests', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test request action', () => {
    const order = orderMock;

    expect(orderReducer(initialState, orderActions.create(order))).toEqual({
      isLoading: true,
      hasError: false,
    });
  });

  it('should test success action', () => {
    expect(orderReducer(initialState, orderActions.success())).toEqual({
      isLoading: false,
      hasError: false,
    });
  });

  it('should test failure action', () => {
    expect(orderReducer(initialState, orderActions.failure())).toEqual({
      isLoading: false,
      hasError: true,
    });
  });
});
