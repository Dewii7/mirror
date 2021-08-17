import {createStore, applyMiddleware} from 'redux';
import Logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import reduxSaga from 'redux-saga';
import SagaWatcher from './SagaWatcher';
import storage from '@react-native-async-storage/async-storage';
import AllReducer from './AllReducer';

const persistConfig = {
  key: 'mirror',
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

const SagaMiddleWare = reduxSaga();

export const Store = createStore(
  persistedReducer,
  applyMiddleware(Logger, SagaMiddleWare),
);

export const Persistor = persistStore(Store);

SagaMiddleWare.run(SagaWatcher);
