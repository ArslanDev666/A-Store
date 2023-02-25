import { MemoryRouter } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { cartProductMock } from 'mocks/data/product';

import { CartSidebar } from './cart-sidebar';

describe('CardSidebar tests', () => {
  const handleClick = jest.fn();

  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<CartSidebar handleOpenOrderFormClick={handleClick} />);

      expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
    });

    it('should render products correctly', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartSidebar handleOpenOrderFormClick={handleClick} />
        </MemoryRouter>,
        {
          preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } },
        }
      );

      expect(screen.getAllByTestId('cart-sidebar-item')).toHaveLength(1);
    });
  });

  describe('Props tests', () => {
    it('should call handleOpenOrderFormClick props', () => {
      renderWithProviders(
        <MemoryRouter>
          <CartSidebar handleOpenOrderFormClick={handleClick} />
        </MemoryRouter>,
        {
          preloadedState: { cart: { products: [cartProductMock], totalPrice: 1 } },
        }
      );

      const button = screen.getByText('Дальше');

      fireEvent.click(button);

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
