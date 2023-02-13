import productsWithCategories from 'utils/category-data.json';
import products from 'utils/data.json';

import { CustomProductType, ProductType } from 'types/product';

export const getCustomProduct = (
  categoryId?: string,
  productId?: string
): CustomProductType | null => {
  if (!categoryId || !productId) return null;

  return (
    productsWithCategories.groups
      .find((category) => category.id === +categoryId)
      ?.products.find((product) => product.id === +productId) || null
  );
};

export const getProduct = (productId?: string): ProductType | null => {
  if (!productId) return null;

  return (
    products.find((product: ProductType) => product.id === +productId) || null
  );
};
