import { v4 as uuidv4 } from 'uuid';

import { cartProductMock } from 'mocks/data/product';

import { CartProductType } from 'types/product';

import { cartActions, cartReducer, initialState, ProductStateType } from '../slice';

jest.mock('uuid');

describe('slice tests', () => {
  beforeEach(() => {
    (uuidv4 as jest.Mock).mockImplementation(() => cartProductMock.key);
  });

  it('should return the initial state', () => {
    expect(cartReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should test init action', () => {
    const equalState: ProductStateType = {
      products: [cartProductMock],
      totalPrice: cartProductMock.price,
    };

    expect(cartReducer(initialState, cartActions.init(equalState))).toEqual(equalState);
  });

  it('should test add action', () => {
    const product = cartProductMock;
    const equalState: ProductStateType = { products: [product], totalPrice: product.price };

    expect(cartReducer(initialState, cartActions.add(product))).toEqual(equalState);
  });
  it('should test add action when cart has product', () => {
    const product = cartProductMock;
    const updateProduct: CartProductType = {
      ...cartProductMock,
      count: 2,
      totalPrice: cartProductMock.price * 2,
    };
    const testInitialState: ProductStateType = {
      totalPrice: product.totalPrice,
      products: [product],
    };
    const equalState: ProductStateType = {
      totalPrice: updateProduct.totalPrice,
      products: [updateProduct],
    };

    expect(cartReducer(testInitialState, cartActions.add(product))).toEqual(equalState);
  });

  it('should test increaseProduct action', () => {
    const product = cartProductMock;
    const updateProduct: CartProductType = {
      ...cartProductMock,
      count: 2,
      totalPrice: cartProductMock.price * 2,
    };

    const equalState: ProductStateType = {
      totalPrice: product.price * 2,
      products: [updateProduct],
    };
    const testInitialState: ProductStateType = {
      totalPrice: product.price,
      products: [product],
    };

    expect(cartReducer(testInitialState, cartActions.increaseProduct(product.key))).toEqual(
      equalState
    );
  });

  it('should test decreaseProduct action', () => {
    const product: CartProductType = {
      ...cartProductMock,
      count: 2,
      totalPrice: cartProductMock.price * 2,
    };

    const updateProduct: CartProductType = {
      ...cartProductMock,
      count: 1,
      totalPrice: cartProductMock.price,
    };

    const testInitialState: ProductStateType = {
      totalPrice: product.totalPrice,
      products: [product],
    };

    const equalState: ProductStateType = {
      totalPrice: updateProduct.totalPrice,
      products: [updateProduct],
    };

    expect(cartReducer(testInitialState, cartActions.decreaseProduct(product.key))).toEqual(
      equalState
    );
  });

  it('should test decreaseProduct action when product count = 1', () => {
    const product = cartProductMock;
    const testInitialState: ProductStateType = {
      totalPrice: product.price,
      products: [product],
    };
    const equalState: ProductStateType = {
      totalPrice: 0,
      products: [],
    };

    expect(cartReducer(testInitialState, cartActions.decreaseProduct(product.key))).toEqual(
      equalState
    );
  });

  it('should test deleteProduct action', () => {
    const product = cartProductMock;
    const testInitialState: ProductStateType = {
      totalPrice: product.price,
      products: [product],
    };
    const equalState: ProductStateType = {
      totalPrice: 0,
      products: [],
    };

    expect(cartReducer(testInitialState, cartActions.deleteProduct(product.key))).toEqual(
      equalState
    );
  });
});
