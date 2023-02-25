import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';

import { store } from 'store';
import { cartActions } from 'store/cart';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { CartProductType } from 'types/product';

import { CartProduct } from './cart-product';

describe('CardProduct tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={cartProductMock} />
        </MemoryRouter>
      );

      expect(screen.getByTestId('cart-product')).toBeInTheDocument();
    });

    it('should render params', () => {
      const product: CartProductType = {
        ...cartProductMock,
        params: [{ label: 'color', value: '1' }],
      };

      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={product} />
        </MemoryRouter>
      );

      expect(screen.getAllByTestId('cart-product-param')).toHaveLength(1);
    });

    it('should not render params', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={cartProductMock} />
        </MemoryRouter>
      );

      expect(screen.queryByTestId('cart-product-params')).toBeNull();
    });
  });

  describe('Functions tests', () => {
    const mockPreloadedState = { cart: { products: [cartProductMock], totalPrice: 1 } };

    const mockDispatch = jest.fn();
    beforeEach(() => {
      jest.mock('store/index.ts', () => ({
        useAppDispatch: mockDispatch,
      }));
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should call increaseProduct dispatch', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={cartProductMock} />
        </MemoryRouter>,
        { preloadedState: mockPreloadedState, store: { ...store, dispatch: mockDispatch } }
      );

      fireEvent.click(screen.getByTestId('card-product-increase'));

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(cartActions.increaseProduct(cartProductMock.key));
    });

    it('should call decreaseProduct dispatch', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={cartProductMock} />
        </MemoryRouter>,
        { preloadedState: mockPreloadedState, store: { ...store, dispatch: mockDispatch } }
      );

      fireEvent.click(screen.getByTestId('card-product-decrease'));

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(cartActions.decreaseProduct(cartProductMock.key));
    });

    it('should call deleteProduct dispatch', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProduct product={cartProductMock} />
        </MemoryRouter>,
        { preloadedState: mockPreloadedState, store: { ...store, dispatch: mockDispatch } }
      );

      fireEvent.click(screen.getByTestId('card-product-delete'));

      expect(mockDispatch).toHaveBeenCalledTimes(1);
      expect(mockDispatch).toHaveBeenCalledWith(cartActions.deleteProduct(cartProductMock.key));
    });
  });
});
