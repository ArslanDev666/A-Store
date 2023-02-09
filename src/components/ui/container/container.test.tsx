import { render, screen } from '@testing-library/react';

import { Container } from './container';

const TEST_TEXT = 'Съешь ещё этих мягких французских булок, да выпей чаю';

describe('Container component', () => {
  describe('Props tests', () => {
    it('should render correctly', () => {
      render(<Container>{TEST_TEXT}</Container>);

      expect(screen.getByTestId('container')).toBeInTheDocument();
    });

    it('should render children', () => {
      render(<Container>{TEST_TEXT}</Container>);

      expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
    });
  });
});
