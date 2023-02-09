import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { MadeInAlfaPage } from './made-in-alfa';

describe('MadeInAlfa page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<MadeInAlfaPage />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('made-in-alfa-page')).toBeInTheDocument();
    });

    it('should render title correctly', () => {
      render(<MadeInAlfaPage />, { wrapper: BrowserRouter });

      const element = screen.getByRole('heading', { level: 1, hidden: true });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Сделано в Альфе');
    });
  });
});
