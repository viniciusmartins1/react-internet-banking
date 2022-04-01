import createSaga from 'redux-saga';
import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import { sagas } from './services';

const sagaMiddleware = createSaga(); 

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(sagas);

export default store;  