import { render, screen } from '@testing-library/react';

import { Footer } from './footer';

describe('Footer component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Footer />);

      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should render year correctly', () => {
      const CURRENT_YEAR = new RegExp(new Date().getFullYear().toString(), 'i');

      render(<Footer />);

      expect(screen.getByText(CURRENT_YEAR)).toBeInTheDocument();
    });
  });
});
