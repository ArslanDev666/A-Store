import { rest } from 'msw';

import { PRODUCTS_API } from 'utils/const';

import { madeInAlfaProductsMock } from '../data/products';

export const getMadeInAlfaProductsMockHandler = rest.get(
  `${PRODUCTS_API}/made-in-alfa`,
  (_reg, res, ctx) => {
    const data = madeInAlfaProductsMock;

    return res(ctx.status(200), ctx.json(data));
  }
);
