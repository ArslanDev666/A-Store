import axios from 'axios';

import { createOrder } from 'api/order';

import { orderMock } from 'mocks/data/order';

jest.mock('axios');

describe('test createOrder api', () => {
  const order = orderMock;

  it('should fetches successfully data from an API', async () => {
    const response = { data: '' };

    (axios.post as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));

    await expect(createOrder(order)).resolves.toEqual('');
  });

  it('should fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    (axios.post as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(createOrder(order)).rejects.toThrow(errorMessage);
  });
});
