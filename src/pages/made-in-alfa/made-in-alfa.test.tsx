import { MemoryRouter } from 'react-router-dom';
import { screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { madeInAlfaProductsMock } from 'mocks/data/products';

import { MadeInAlfaPage } from './made-in-alfa';

describe('MadeInAlfa page', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<MadeInAlfaPage />);

      expect(screen.getByTestId('made-in-alfa-page')).toBeInTheDocument();
    });

    it('should render products array', () => {
      const preloadState = {
        madeInAlfa: {
          hasError: false,
          isLoading: false,
          products: madeInAlfaProductsMock,
        },
      };

      renderWithProviders(
        <MemoryRouter>
          <MadeInAlfaPage />
        </MemoryRouter>,
        {
          preloadedState: preloadState,
        }
      );

      expect(screen.getAllByTestId('product')).toHaveLength(madeInAlfaProductsMock.length);
    });
  });
});
