import axios from 'axios';

import { getProduct } from 'api/product';

import { productMock } from 'mocks/data/product';

jest.mock('axios');

describe('test getProduct api', () => {
  it('should fetches successfully data from an API', async () => {
    const product = productMock;
    const response = { data: product };

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));

    await expect(getProduct('0')).resolves.toEqual(product);
  });

  it('should fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getProduct('')).rejects.toThrow(errorMessage);
  });
});
