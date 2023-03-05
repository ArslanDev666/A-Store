import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { ContactPage } from './contact';

describe('Contact page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<ContactPage />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('contact-page')).toBeInTheDocument();
    });

    it('should render title correctly', () => {
      render(<ContactPage />, { wrapper: BrowserRouter });

      const element = screen.getByRole('heading', { level: 1, hidden: true });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Контакты');
    });
  });
});
