import axios, { AxiosError } from 'axios';

import { PRODUCTS_API } from 'utils/products-api';

import { CategoryType } from 'types/product-category';

export const getOwnDesignProducts = (): Promise<CategoryType[]> => {
  return axios
    .get<CategoryType[]>(`${PRODUCTS_API}/your-design`)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      if (error.response) {
        throw new Error();
        // error.response.status === 404
        //   ? errors.api.notFound
        //   : errors.api.server
      } else if (error.request) {
        throw new Error(error.request);
      } else {
        throw new Error(error.message);
      }
    });
};
