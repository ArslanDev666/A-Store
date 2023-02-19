import renderer from 'react-test-renderer';

import { Footer } from './footer';

describe('Footer component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
