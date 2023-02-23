import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { CartSidebar } from './cart-sidebar';

describe('CardSidebar tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<CartSidebar />);

      expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
    });

    it('should render products correctly', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartSidebar />
        </MemoryRouter>,
        {
          preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } },
        }
      );

      expect(screen.getAllByTestId('cart-sidebar-item')).toHaveLength(1);
    });
  });
});
