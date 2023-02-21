import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { CartSidebar } from './cart-sidebar';

describe('CardSidebar tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<CartSidebar />);

      expect(screen.getByTestId('cart-sidebar')).toBeInTheDocument();
    });
  });
});
