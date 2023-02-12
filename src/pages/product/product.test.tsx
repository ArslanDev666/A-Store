import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { getProduct } from 'utils/get-product';

import { routerConfig } from 'routes';

import { ProductPage } from './product';

describe('Product page', () => {
  describe('Render tests', () => {
    it.skip('should render correctly', () => {
      render(<ProductPage />);

      expect(screen.getByTestId('product-page')).toBeInTheDocument();
    });

    it('should find product by url', () => {
      const testCategoryId = '0';
      const testProductId = '5';

      const testUrl = `/categories/${testCategoryId}/products/${testProductId}`;

      const router = createMemoryRouter(routerConfig, {
        initialEntries: [testUrl],
      });

      render(<RouterProvider router={router} />);

      const findProduct = getProduct(testCategoryId, testProductId);

      const element = screen.getByRole('heading', {
        level: 1,
        hidden: true,
      });

      expect(element).toBeInTheDocument();
      expect(element).toHaveTextContent(findProduct!.title);
    });

    it('should not found product by url', () => {
      const testCategoryId = 'a';
      const testProductId = 'a';

      const testUrl = `/categories/${testCategoryId}/products/${testProductId}`;

      const router = createMemoryRouter(routerConfig, {
        initialEntries: [testUrl],
      });

      render(<RouterProvider router={router} />);

      const element = screen.queryByRole('heading', {
        level: 1,
        hidden: true,
      });

      expect(element).toBeNull();
    });
  });
});
