import { call, takeLatest, put } from 'redux-saga/effects';
import * as actions from './reducer';

function* getDataTable() {
  try {
    const response = yield call(
      fetch,
      'https://www.mockachino.com/06c67c77-18c4-45/users',
      {
        method: 'GET',
      },
    );
    const data = yield response.json();
    console.log(data, 'info');
    yield put(actions.setDataTableSuceeded(data));
  } catch (err) {
    yield put(actions.setDataTableError(err));
    console.error('Error saving data:', err);
  }
}

export default [takeLatest(actions.setDataTableRequest, getDataTable)];
