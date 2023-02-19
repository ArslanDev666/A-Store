import { createMemoryRouter, RouteObject, RouterProvider } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import { ErrorBoundary } from './error-boundary';

const Child = () => {
  throw new Error('Произошла ошибка');
};

describe('ErrorBoundary component', () => {
  const routerConfig: RouteObject[] = [
    {
      errorElement: <ErrorBoundary />,
      path: '/error',
      element: <Child />,
    },
  ];
  const router = createMemoryRouter(routerConfig, {
    initialEntries: ['/error'],
  });

  const original = window.location;

  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    });
    jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterAll(() => {
    Object.defineProperty(window, 'location', { configurable: true, value: original });
    (console.error as jest.Mock).mockRestore();
  });

  it('should render correctly', () => {
    render(<RouterProvider router={router} />);

    expect(screen.getByText(/Возникла ошибка/i)).toBeInTheDocument();
  });

  it('should reload page by click', () => {
    render(<RouterProvider router={router} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(window.location.reload).toHaveBeenCalled();
  });
});
