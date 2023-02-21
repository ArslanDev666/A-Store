import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

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
  });
});
