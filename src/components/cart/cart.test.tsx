import { render, screen } from '@testing-library/react';

import { Cart } from './cart';

describe('CardSidebar tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Cart />);

      expect(screen.getByTestId('cart')).toBeInTheDocument();
    });
  });
});
