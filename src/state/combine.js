import { all } from 'redux-saga/effects';
import {
  reducer as sessionReducer,
  sagas as sessionSaga,
} from './Session/index';

export const reducers = {
  session: sessionReducer,
};

export function* sagas() {
  yield all([...sessionSaga]);
}
