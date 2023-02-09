import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { HomePage } from './home';

describe('Home page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<HomePage />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('home-page')).toBeInTheDocument();
    });

    it('should render title correctly', () => {
      render(<HomePage />, { wrapper: BrowserRouter });

      const element = screen.getByRole('heading', { level: 1, hidden: true });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('A-Store');
    });
  });
});
