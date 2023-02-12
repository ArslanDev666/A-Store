export const getProductUrl = (productId: number, categoryId?: number) => {
  if (categoryId?.toString()) {
    return `/categories/${categoryId}/products/${productId}`;
  }

  return `/products/${productId}`;
};
