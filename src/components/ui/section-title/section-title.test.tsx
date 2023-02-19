import { render, screen } from '@testing-library/react';

import styles from './section-title.module.css';

import { SectionTitle } from './section-title';

const TEST_TITLE = 'Съешь ещё этих мягких французских булок, да выпей чаю';
const TEST_DESCRIPTION = 'Lorem, ipsum.';

const classes = {
  primary: styles.titlePrimary,
  default: styles.titleDefault,
};

describe('SectionTitle component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<SectionTitle title={TEST_TITLE} />);

      expect(screen.getByTestId('section-title')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(<SectionTitle title={TEST_TITLE} />);

      expect(screen.getByText(TEST_TITLE)).toBeInTheDocument();
    });

    it('should render description correctly', () => {
      render(<SectionTitle title={TEST_TITLE} description={TEST_DESCRIPTION} />);

      expect(screen.getByText(TEST_DESCRIPTION)).toBeInTheDocument();
    });

    it('should render with default color', () => {
      render(
        <SectionTitle title={TEST_TITLE} description={TEST_DESCRIPTION} colorTitle='default' />
      );

      const element = screen.getByText(TEST_TITLE);

      expect(element.className).toMatch(classes.default);
    });

    it('should render with primary color', () => {
      render(
        <SectionTitle title={TEST_TITLE} description={TEST_DESCRIPTION} colorTitle='primary' />
      );

      const element = screen.getByText(TEST_TITLE);

      expect(element.className).toMatch(classes.primary);
    });
  });
});
