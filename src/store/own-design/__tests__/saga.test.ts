import axios from 'axios';
import { runSaga } from 'redux-saga';

import { ownDesignProductsWithCategoryMock } from 'mocks/data/products';

import { getOwnDesignSaga } from '../sagas';
import { ownDesignActions } from '../slice';

jest.mock('axios');

describe('slice tests', () => {
  it('should test getOwnDesignSaga saga with success result', async () => {
    const products = ownDesignProductsWithCategoryMock;

    (axios.get as jest.Mock).mockResolvedValue({ data: products });

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getOwnDesignSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(ownDesignActions.success(products));
  });

  it('should test getOwnDesignSaga saga with failure result', async () => {
    const errorMessage = 'Error message';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    const dispatched: any = [];
    await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      getOwnDesignSaga as any
    ).toPromise();

    expect(dispatched[0]).toEqual(ownDesignActions.failure());
  });
});
