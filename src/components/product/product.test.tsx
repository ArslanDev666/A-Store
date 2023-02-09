import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import testImageUrl from 'assets/images/home-page/banner-made-in-alfa.jpeg';

import { Product } from './product';

const TEST_TITLE = 'Съешь ещё этих мягких французских булок, да выпей чаю';
const TEST_DESCRIPTION = 'Lorem, ipsum.';
const TEST_PRICE = 100;
const TEST_ID = 1;
const TEST_LINK = `/products/${TEST_ID}`;

describe('Product component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByTestId('product')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(TEST_TITLE)).toBeInTheDocument();
    });

    it('should add href attribute correctly', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByRole('link')).toHaveAttribute('href', TEST_LINK);
    });

    it('should render image correctly', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', testImageUrl);
    });

    it('should render price correctly', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(TEST_PRICE)).toBeInTheDocument();
    });

    it('should not render description', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.queryByText(TEST_DESCRIPTION)).not.toBeInTheDocument();
    });

    it('should render description', () => {
      render(
        <Product
          title={TEST_TITLE}
          id={TEST_ID}
          image={testImageUrl}
          price={TEST_PRICE}
          description={TEST_DESCRIPTION}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(TEST_DESCRIPTION)).toBeInTheDocument();
    });
  });
});
