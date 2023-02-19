import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { ownDesignProductsMock } from 'mocks/data/products';

import { ProductCategory } from './product-category';

const testCategory = {
  title: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  description: 'Lorem, ipsum.',
  id: 1,
  products: ownDesignProductsMock,
};

describe('ProductCategory component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<ProductCategory {...testCategory} />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('product-category')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(<ProductCategory {...testCategory} />, { wrapper: BrowserRouter });

      expect(screen.getByText(testCategory.title)).toBeInTheDocument();
    });

    it('should render description correctly', () => {
      render(<ProductCategory {...testCategory} />, { wrapper: BrowserRouter });

      expect(screen.getByText(testCategory.description)).toBeInTheDocument();
    });

    it('should render list product correctly', () => {
      render(<ProductCategory {...testCategory} />, { wrapper: BrowserRouter });

      const titles = screen.getAllByRole('heading', { level: 2 });

      testCategory.products.forEach((product) => {
        const titleEl = titles.find((el) => el.textContent === product.title);

        expect(titleEl).toBeInTheDocument();
      });
    });
  });
});
