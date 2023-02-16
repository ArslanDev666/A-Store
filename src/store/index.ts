import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { notificationsReducer } from './notifications';
import { productReducer } from './product';
import { ownDesignProductsReducer } from './products';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  ownDesignProducts: ownDesignProductsReducer,
  product: productReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
    middleware: middlewares,
  });
};

export const store = setupStore();

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
