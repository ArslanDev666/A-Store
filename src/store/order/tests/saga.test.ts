import axios from 'axios';
import { runSaga } from 'redux-saga';

import { orderMock } from 'mocks/data/order';

import { createOrderSaga } from '../sagas';
import { orderActions } from '../slice';

jest.mock('axios');

describe('slice tests', () => {
  it('should test createOrder saga with success result', async () => {
    const order = orderMock;
    const action = { payload: order, type: 'pending' };

    (axios.post as jest.Mock).mockResolvedValue({ data: order });

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      () => createOrderSaga(action) as any
    ).toPromise();

    expect(dispatched[0]).toEqual(orderActions.success());
  });

  it('should test createOrder saga with failure result', async () => {
    const errorMessage = 'Error message';

    (axios.post as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      createOrderSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(orderActions.failure());
  });
});
