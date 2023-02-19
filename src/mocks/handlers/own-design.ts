import { rest } from 'msw';

import { PRODUCTS_API } from 'utils/products-api';

import { ownDesignProductsMock } from '../data/products';

export const getOwnDesignProductsMockHandler = rest.get(
  `${PRODUCTS_API}/your-design`,
  (_reg, res, ctx) => {
    const data = ownDesignProductsMock;

    return res(ctx.status(200), ctx.json(data));
  }
);
