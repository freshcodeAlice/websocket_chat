import { createStore, applyMiddleware } from "redux";
import createSagaMW from 'redux-saga';
import rootReducer from "./reducers";
import rootSaga from './sagas';
import {composeWithDevTools} from 'redux-devtools-extension';

const sagaMW = createSagaMW();

const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMW))
    );

sagaMW.run(rootSaga);

export default store;

