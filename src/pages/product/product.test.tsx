import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { routerConfig } from 'routes';

import { ProductPage } from './product';

describe('Render tests', () => {
  it.skip('should render correctly', () => {
    render(<ProductPage />);

    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });
});

describe('Product page', () => {
  it('should find product by url', () => {
    const testProductId = '0';
    const testProductTitle = 'Рюкзак «Для умных и свободных»';

    const testUrl = `/products/${testProductId}`;

    const router = createMemoryRouter(routerConfig, {
      initialEntries: [testUrl],
    });

    render(<RouterProvider router={router} />);

    const element = screen.getByRole('heading', {
      level: 1,
      hidden: true,
    });

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(testProductTitle);
  });

  it('should not found product by url', () => {
    const testProductId = '-';

    const testUrl = `/products/${testProductId}`;

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

describe('Product page with categories', () => {
  it('should find product by url', () => {
    const testCategoryId = '0';
    const testProductId = '5';
    const testProductTitle = 'Худи с бархатными стикерами';

    const testUrl = `/categories/${testCategoryId}/products/${testProductId}`;

    const router = createMemoryRouter(routerConfig, {
      initialEntries: [testUrl],
    });

    render(<RouterProvider router={router} />);

    const element = screen.getByRole('heading', {
      level: 1,
      hidden: true,
    });

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(testProductTitle);
  });

  it('should not found product by url', () => {
    const testCategoryId = '-';
    const testProductId = '-';

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
