import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { CartProducts, PropsType } from './cart-products';

describe('CartProducts component', () => {
  describe('Render tests', () => {
    const props: PropsType = { delivery: { price: 0, text: '' } };

    it('should render correctly', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartProducts {...props} />
        </MemoryRouter>,
        {
          preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } },
        }
      );

      expect(screen.getByTestId('cart-products')).toBeInTheDocument();
    });
  });
});
