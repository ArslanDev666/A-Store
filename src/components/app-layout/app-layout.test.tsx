import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { AppLayout } from './app-layout';

describe('AppLayout component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<AppLayout hasCart={false} />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('app-layout')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render footer', () => {
      render(<AppLayout hasCart={false} />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should render cart', () => {
      renderWithProviders(
        <MemoryRouter>
          <AppLayout hasFooter={false} />
        </MemoryRouter>,
        { preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } } }
      );

      expect(screen.getByTestId('cart')).toBeInTheDocument();
    });
  });
});
