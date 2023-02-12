import { getProduct } from 'utils/get-product';

it('Get product by categoryId 0 and ProductId 5', () => {
  const testProductTitle = 'Худи с бархатными стикерами';

  const product = getProduct('0', '5');

  expect(product?.title).toBe(testProductTitle);
});

it('Get product by categoryId 2 and ProductId 11', () => {
  const testProductTitle = 'Худи с 3D-стикерами';

  const product = getProduct('2', '11');

  expect(product?.title).toBe(testProductTitle);
});

it('Failed get product with null categoryId', () => {
  const product = getProduct('', '11');

  expect(product).toBeNull();
});

it('Failed get product with null productId', () => {
  const product = getProduct('2', '');

  expect(product).toBeNull();
});
