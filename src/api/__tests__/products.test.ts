import axios from 'axios';

import { getMadeInAlfaProducts, getOwnDesignProducts } from 'api/products';

import { madeInAlfaProductsMock, ownDesignProductsMock } from 'mocks/data/products';

jest.mock('axios');

describe('test getOwnDesignProducts api', () => {
  it('should fetches successfully data from an API', async () => {
    const product = ownDesignProductsMock;
    const response = { data: product };

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));

    await expect(getOwnDesignProducts()).resolves.toEqual(product);
  });

  it('should fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getOwnDesignProducts()).rejects.toThrow(errorMessage);
  });
});

describe('test getMadeInAlfaProducts api', () => {
  it('should fetches successfully data from an API', async () => {
    const product = madeInAlfaProductsMock;
    const response = { data: product };

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve(response));

    await expect(getMadeInAlfaProducts()).resolves.toEqual(product);
  });

  it('should fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error';

    (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));

    await expect(getMadeInAlfaProducts()).rejects.toThrow(errorMessage);
  });
});
