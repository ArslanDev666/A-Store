import axios, { AxiosError } from 'axios';

import { PRODUCTS_API } from 'utils/products-api';

import { CustomProductType, ProductType } from 'types/product';

export const getProduct = (
  id?: string
): Promise<ProductType | CustomProductType> => {
  return axios
    .get<ProductType | CustomProductType>(`${PRODUCTS_API}/product/${id}`)
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
