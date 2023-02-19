import { BrowserRouter } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Header } from './header';

describe('Header component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Header />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('header')).toBeInTheDocument();
    });

    it('should render sidebar-navigation after click menu', async () => {
      render(<Header />, { wrapper: BrowserRouter });

      userEvent.click(screen.getByText('меню'));

      expect(screen.getByTestId('navigation-sidebar')).toBeInTheDocument();
    });

    it('should not render sidebar after click close sidebar-navigation button', async () => {
      render(<Header />, { wrapper: BrowserRouter });

      userEvent.click(screen.getByText('меню'));

      expect(screen.getByTestId('navigation-sidebar')).toBeInTheDocument();

      userEvent.click(screen.getByTestId('navigation-sidebar-close'));

      await waitForElementToBeRemoved(screen.queryByTestId('navigation-sidebar')).then(() =>
        expect(screen.queryByTestId('navigation-sidebar')).not.toBeInTheDocument()
      );
    });
  });
});
