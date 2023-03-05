import axios, { AxiosError } from 'axios';

import { PRODUCTS_API } from 'utils/const';

import { ProductType } from 'types/product';
import { CategoryType } from 'types/product-category';

export const getOwnDesignProducts = (): Promise<CategoryType[]> => {
  return axios
    .get<CategoryType[]>(`${PRODUCTS_API}/your-design`)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};

export const getMadeInAlfaProducts = (): Promise<ProductType[]> => {
  return axios
    .get<ProductType[]>(`${PRODUCTS_API}/made-in-alfa`)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};
