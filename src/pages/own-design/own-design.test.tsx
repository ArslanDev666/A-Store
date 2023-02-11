import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { OwnDesignPage } from './own-design';

describe('OwnDesign page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<OwnDesignPage />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('own-design-page')).toBeInTheDocument();
    });

    it('should render title correctly', () => {
      render(<OwnDesignPage />, { wrapper: BrowserRouter });

      const element = screen.getByRole('heading', { level: 1, hidden: true });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Свой дизайн');
    });
  });
});
