import {takeEvery} from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes';

export default function * rootSaga () {
    yield takeEvery(ACTIONS.GET_MESSAGE_REQUEST, );
    yield takeEvery(ACTIONS.CREATE_MESSAGE_REQUEST, );
}