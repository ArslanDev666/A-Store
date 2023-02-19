import axios from 'axios';
import { runSaga } from 'redux-saga';

import { productMock } from 'mocks/data/product';

import { getProductsSaga } from '../sagas';
import { productActions } from '../slice';

jest.mock('axios');

describe('slice tests', () => {
  it('should test getProductsSaga saga with success result', async () => {
    const product = productMock;
    const action = { payload: { id: '1' }, type: 'pending' };

    (axios.get as jest.Mock).mockResolvedValue({ data: product });

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      () => getProductsSaga(action) as any
    ).toPromise();

    expect(dispatched[0]).toEqual(productActions.success(product));
  });

  it('should test getProductsSaga saga with failure result', async () => {
    const errorMessage = 'Error message';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getProductsSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(productActions.failure());
  });
});
