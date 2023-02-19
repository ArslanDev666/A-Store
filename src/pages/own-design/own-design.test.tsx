import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { ownDesignProductsWithCategoryMock } from 'mocks/data/products';

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

    it('should hide content when empty products array', () => {
      renderWithProviders(<OwnDesignPage />);

      expect(screen.queryByText(/Посмотреть и потрогать все стикеры/i)).toBeNull();
    });

    it('should render products array', () => {
      const preloadState = {
        ownDesign: {
          hasError: false,
          isLoading: false,
          products: ownDesignProductsWithCategoryMock,
        },
      };

      renderWithProviders(
        <MemoryRouter>
          <OwnDesignPage />
        </MemoryRouter>,
        {
          preloadedState: preloadState,
        }
      );

      expect(screen.getAllByTestId('product-category')).toHaveLength(
        ownDesignProductsWithCategoryMock.length
      );
    });
  });
});
