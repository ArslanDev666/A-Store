import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { AppLayout } from './app-layout';

describe('Footer component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<AppLayout />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('app-layout')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render footer', () => {
      render(<AppLayout hasFooter />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('footer')).toBeInTheDocument();
    });

    it('should not be render footer', () => {
      render(<AppLayout hasFooter={false} />, { wrapper: BrowserRouter });

      expect(screen.queryByTestId('footer')).toBeNull();
    });
  });
});
