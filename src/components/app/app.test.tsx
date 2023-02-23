import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';

import { setupStore, store } from 'store';
import { madeInAlfaActions } from 'store/made-in-alfa';
import { ownDesignActions } from 'store/own-design';

import { renderWithProviders } from 'utils/tests-utils';

import { App } from '.';

describe('snapshot testing', () => {
  it('should render App', () => {
    const component = renderer.create(
      <Provider store={setupStore()}>
        <App />
      </Provider>
    );
    expect(component).toMatchSnapshot();
  });
});

describe('functions testing', () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    jest.mock('store/index.ts', () => ({
      useAppDispatch: mockDispatch,
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render App', () => {
    renderWithProviders(<App />, {
      store: { ...store, dispatch: mockDispatch },
    });

    expect(mockDispatch).toHaveBeenCalledWith(ownDesignActions.request());
    expect(mockDispatch).toHaveBeenCalledWith(madeInAlfaActions.request());
  });
});
