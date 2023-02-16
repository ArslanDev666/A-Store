import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { renderWithProviders } from 'utils/tests-utils';

import { routerConfig } from 'routes';

import { ProductPage } from './product';

describe('Render tests', () => {
  it.skip('should render correctly', () => {
    renderWithProviders(<ProductPage />);

    expect(screen.getByTestId('product-page')).toBeInTheDocument();
  });
});

describe('Product page with product tests', () => {
  it('should find product by url', () => {
    const testProductId = '0';
    const testProductTitle = 'Рюкзак «Для умных и свободных»';

    const testUrl = `/products/${testProductId}`;

    const router = createMemoryRouter(routerConfig, {
      initialEntries: [testUrl],
    });

    renderWithProviders(<RouterProvider router={router} />);

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

    renderWithProviders(<RouterProvider router={router} />);

    const element = screen.queryByRole('heading', {
      level: 1,
      hidden: true,
    });

    expect(element).toBeNull();
  });
});

describe('Product page with custom product tests', () => {
  it('should find product by url', () => {
    const testCategoryId = '0';
    const testProductId = '5';
    const testProductTitle = 'Худи с бархатными стикерами';

    const testUrl = `/categories/${testCategoryId}/products/${testProductId}`;

    const router = createMemoryRouter(routerConfig, {
      initialEntries: [testUrl],
    });

    renderWithProviders(<RouterProvider router={router} />);

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

    renderWithProviders(<RouterProvider router={router} />);

    const element = screen.queryByRole('heading', {
      level: 1,
      hidden: true,
    });

    expect(element).toBeNull();
  });
});

describe('Functions tests', () => {
  const DOWN_ARROW_KEY = { keyCode: 40 };
  const ENTER_KEY = { keyCode: 13 };

  const routerWithParams = createMemoryRouter(routerConfig, {
    initialEntries: [`/categories/0/products/5`],
  });

  it('onChange select, if the same element is selected', async () => {
    renderWithProviders(<RouterProvider router={routerWithParams} />);

    expect(screen.getByText('XS')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('product-select-size'));

    fireEvent.keyDown(
      screen.getByTestId('product-select-size'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(
      screen.getByTestId('product-select-size'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(screen.getByTestId('product-select-size'), ENTER_KEY);

    expect(screen.getByText('S')).toBeInTheDocument();
    expect(screen.queryByText('XS')).toBeNull();
  });

  it('onChange select, if the selected item is selected', async () => {
    renderWithProviders(<RouterProvider router={routerWithParams} />);

    expect(screen.getByText('XS')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('product-select-size'));

    fireEvent.keyDown(
      screen.getByTestId('product-select-size'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(screen.getByTestId('product-select-size'), ENTER_KEY);

    expect(screen.getByText('XS')).toBeInTheDocument();
  });

  it('onChange select color', () => {
    const testImageUrl =
      'https://thumb.tildacdn.com/stor3866-6439-4632-b936-343331383463/-/cover/560x745/center/center/-/format/webp/89792319.png';
    const testUpdateImageUrl =
      'http://qa-games.ru/astore/public/images/25133982.png';

    renderWithProviders(<RouterProvider router={routerWithParams} />);

    expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
      'src',
      testImageUrl
    );

    fireEvent.click(screen.getByTestId('product-select-color'));

    fireEvent.keyDown(
      screen.getByTestId('product-select-color'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(
      screen.getByTestId('product-select-color'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(screen.getByTestId('product-select-color'), ENTER_KEY);

    expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
      'src',
      testUpdateImageUrl
    );
  });

  it('onChange select color, if the selected item is selected', () => {
    const testImageUrl =
      'https://thumb.tildacdn.com/stor3866-6439-4632-b936-343331383463/-/cover/560x745/center/center/-/format/webp/89792319.png';

    renderWithProviders(<RouterProvider router={routerWithParams} />);

    expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
      'src',
      testImageUrl
    );

    fireEvent.click(screen.getByTestId('product-select-color'));
    fireEvent.keyDown(
      screen.getByTestId('product-select-color'),
      DOWN_ARROW_KEY
    );
    fireEvent.keyDown(screen.getByTestId('product-select-color'), ENTER_KEY);

    expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
      'src',
      testImageUrl
    );
  });

  it('Show select models', async () => {
    const router = createMemoryRouter(routerConfig, {
      initialEntries: ['/products/3'],
    });
    renderWithProviders(<RouterProvider router={router} />);
    expect(screen.getByTestId('product-select-model')).toBeInTheDocument();
  });

  it('Alert on submit click', async () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    renderWithProviders(<RouterProvider router={routerWithParams} />);
    fireEvent.click(screen.getByText('В корзину'));
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
