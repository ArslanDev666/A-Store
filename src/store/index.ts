import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { cartReducer } from './cart';
import { madeInAlfaReducer } from './made-in-alfa';
import { notificationsReducer } from './notifications';
import { ownDesignReducer } from './own-design';
import { productReducer } from './product';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const rootReducer = combineReducers({
  notifications: notificationsReducer,
  ownDesign: ownDesignReducer,
  madeInAlfa: madeInAlfaReducer,
  product: productReducer,
  cart: cartReducer,
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
