import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { CartSidebar } from './cart-sidebar';

describe('CardSidebar tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<CartSidebar />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
    });
  });
});
