import axios from 'axios';
import { runSaga } from 'redux-saga';

import { madeInAlfaProductsMock } from 'mocks/data/products';

import { getMadeInAlfaSaga } from '../sagas';
import { madeInAlfaActions } from '../slice';

jest.mock('axios');

describe('slice tests', () => {
  it('should test getMadeInAlfaSaga saga with success result', async () => {
    const products = madeInAlfaProductsMock;

    (axios.get as jest.Mock).mockResolvedValue({ data: products });

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getMadeInAlfaSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(madeInAlfaActions.success(products));
  });

  it('should test getMadeInAlfaSaga saga with failure result', async () => {
    const errorMessage = 'Error message';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getMadeInAlfaSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(madeInAlfaActions.failure());
  });
});
