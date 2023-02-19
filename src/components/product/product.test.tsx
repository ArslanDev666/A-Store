import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { getProductUrl } from 'utils/product-url';

import imageUrl from 'assets/images/home-page/banner-made-in-alfa.jpeg';

import { Product } from './product';

const testProduct = {
  title: 'Съешь ещё этих мягких французских булок, да выпей чаю',
  description: 'Описание продукта',
  id: 1,
  link: getProductUrl(1),
  image: imageUrl,
  price: 200,
};

describe('Product component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
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
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(testProduct.title)).toBeInTheDocument();
    });

    it('should add href attribute correctly', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByRole('link')).toHaveAttribute('href', testProduct.link);
    });

    it('should render image correctly', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
        />,
        { wrapper: BrowserRouter }
      );

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', testProduct.image);
    });

    it('should render price correctly', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(testProduct.price)).toBeInTheDocument();
    });

    it('should not render description', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.queryByText(testProduct.description)).toBeNull();
    });

    it('should render description', () => {
      render(
        <Product
          title={testProduct.title}
          id={testProduct.id}
          image={testProduct.image}
          price={testProduct.price}
          subtitle={testProduct.description}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(testProduct.description)).toBeInTheDocument();
    });
  });
});
