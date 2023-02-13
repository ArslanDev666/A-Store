import { getCustomProduct,getProduct } from 'utils/get-product';

describe('Testing getProductWithCategory function', () => {
  it('Get product by categoryId 0 and ProductId 5', () => {
    const testProductTitle = 'Худи с бархатными стикерами';

    const product = getCustomProduct('0', '5');

    expect(product?.title).toBe(testProductTitle);
  });

  it('Get product by categoryId 2 and ProductId 11', () => {
    const testProductTitle = 'Худи с 3D-стикерами';

    const product = getCustomProduct('2', '11');

    expect(product?.title).toBe(testProductTitle);
  });

  it('Failed get product with null categoryId', () => {
    const product = getCustomProduct('', '11');

    expect(product).toBeNull();
  });

  it('Failed get product with null productId', () => {
    const product = getCustomProduct('2', '');

    expect(product).toBeNull();
  });
});

describe('Testing getProduct function', () => {
  it('Get product by productId 0', () => {
    const testProductTitle = 'Рюкзак «Для умных и свободных»';

    const product = getProduct('0');

    expect(product?.title).toBe(testProductTitle);
  });

  it('Failed get product with null productId', () => {
    const product = getProduct();

    expect(product).toBeNull();
  });
});
