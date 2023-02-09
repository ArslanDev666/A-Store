import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import {
  NAVIGATION_LINKS,
  NavigationSidebar,
  PRIVACY_POLICY_LINK,
  SOCIALS_LINKS,
} from './navigation-sidebar';

describe('NavigationSidebar component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<NavigationSidebar />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('navigation-sidebar')).toBeInTheDocument();
    });

    it('should render navigation correctly', () => {
      render(<NavigationSidebar />, { wrapper: BrowserRouter });

      NAVIGATION_LINKS.forEach((link) => {
        const element = screen.getByRole('link', { name: link.text });

        expect(element).toHaveAttribute('href', link.href);
      });
    });

    it('should render privacy policy', () => {
      const linkName = new RegExp('Политика конфиденциальности', 'i');

      render(<NavigationSidebar />, { wrapper: BrowserRouter });

      const element = screen.getByRole('link', { name: linkName });

      expect(element).toHaveAttribute('href', PRIVACY_POLICY_LINK);
    });

    it('should render socials links correctly', () => {
      render(<NavigationSidebar />, { wrapper: BrowserRouter });

      SOCIALS_LINKS.forEach((link) => {
        const element = screen.getByRole('link', { name: link.text });

        expect(element).toHaveAttribute('href', link.href);
      });
    });
  });
});
