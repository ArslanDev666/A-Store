import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import { NavigationSidebar } from './navigation-sidebar';

describe('NavigationSidebar component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      const tree = renderer
        .create(
          <MemoryRouter>
            <NavigationSidebar />
          </MemoryRouter>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
