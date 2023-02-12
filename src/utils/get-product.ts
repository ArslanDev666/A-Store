import data from 'utils/category-data.json';

export const getProduct = (categoryId?: string, productId?: string) => {
  if (!categoryId || !productId) return null;

  return data.groups
    .find((category) => category.id === +categoryId)
    ?.products.find((product) => product.id === +productId);
};
