import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { OwnDesignPage } from './own-design';

describe('OwnDesign page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<OwnDesignPage />);

      expect(screen.getByTestId('own-design-page')).toBeInTheDocument();
    });

    it('should render title correctly', () => {
      renderWithProviders(<OwnDesignPage />);

      const element = screen.getByRole('heading', { level: 1, hidden: true });
      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent('Свой дизайн');
    });
  });
});
