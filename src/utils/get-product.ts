import productsWithCategories from 'utils/category-data.json';
import products from 'utils/data.json';

export const getProductWithCategory = (
  categoryId?: string,
  productId?: string
) => {
  if (!categoryId || !productId) return null;

  return productsWithCategories.groups
    .find((category) => category.id === +categoryId)
    ?.products.find((product) => product.id === +productId);
};

export const getProduct = (productId?: string) => {
  if (!productId) return null;

  return products.find((product) => product.id === +productId);
};
