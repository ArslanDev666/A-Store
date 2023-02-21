import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { Cart } from './cart';

describe('CardSidebar tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(
        <MemoryRouter>
          <Cart />
        </MemoryRouter>,
        {
          preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } },
        }
      );

      expect(screen.getByTestId('cart')).toBeInTheDocument();
    });
  });
});
