import { rest } from 'msw';

import { PRODUCTS_API } from 'utils/products-api';

import { customProductMock, productMock } from '../data/product';

export const getProductMockHandler = rest.get(`${PRODUCTS_API}/product/3`, (_reg, res, ctx) => {
  const data = productMock;
  return res(ctx.status(200), ctx.json(data));
});

export const getCustomProductMockHandler = rest.get(
  `${PRODUCTS_API}/product/5`,
  (_reg, res, ctx) => {
    const data = customProductMock;

    return res(ctx.status(200), ctx.json(data));
  }
);
