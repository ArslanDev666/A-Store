import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import createSagaMiddleware from 'redux-saga';

import { cartReducer } from './cart';
import { madeInAlfaReducer } from './made-in-alfa';
import { notificationsReducer } from './notifications';
import { ownDesignReducer } from './own-design';
import { productReducer } from './product';
import { rootSaga } from './root-saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const persistConfig = {
  key: 'root',
  whitelist: ['cart'],
  storage,
};

const reducers = combineReducers({
  notifications: notificationsReducer,
  ownDesign: ownDesignReducer,
  madeInAlfa: madeInAlfaReducer,
  product: productReducer,
  cart: cartReducer,
});

const rootReducer = persistReducer(persistConfig, reducers);

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: true,
    middleware: middlewares,
  });
};

export const store = setupStore();
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;

export const useAppDispatch = () => useDispatch<AppStore['dispatch']>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
