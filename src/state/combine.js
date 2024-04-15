import { all } from 'redux-saga/effects';
import {
  reducer as sessionReducer,
  sagas as sessionSaga,
} from './Session/index';
import {
  reducer as dashboardReducer,
  sagas as dashboardSaga,
} from './Dashboard/index';

export const reducers = {
  session: sessionReducer,
  dashboard: dashboardReducer,
};

export function* sagas() {
  yield all([...sessionSaga, ...dashboardSaga]);
}
