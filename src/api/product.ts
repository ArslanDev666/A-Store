import axios, { AxiosError } from 'axios';

import { PRODUCTS_API } from 'utils/const';

import { CustomProductType, ProductType } from 'types/product';

export const getProduct = (id: string): Promise<ProductType | CustomProductType> => {
  return axios
    .get<ProductType | CustomProductType>(`${PRODUCTS_API}/product/${id}`)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};
