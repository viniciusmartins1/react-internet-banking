import createSaga from 'redux-saga';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { sagas } from './services';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSaga(); 

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor};  