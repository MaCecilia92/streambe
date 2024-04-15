import { call, takeLatest, put, takeEvery } from 'redux-saga/effects';
import * as actions from './reducer';

function saveDataToLocalStorage(data) {
  const dataString = JSON.stringify(data);
  localStorage.setItem('session', dataString);
}

function deleteDataToLocalStorage() {
  localStorage.removeItem('session');
}

function* setDatatoLocalStorage({ payload }) {
  try {
    if (!payload || !payload.username) {
      return;
    }
    const response = yield call(
      fetch,
      'https://www.mockachino.com/06c67c77-18c4-45/login',
      {
        method: 'GET',
      },
    );
    const data = yield response.json();

    if (payload.username.includes(data.username)) {
      yield put(actions.setDataSuceeded(data));
      saveDataToLocalStorage(data.access_token);
    }
  } catch (err) {
    yield put(actions.setDataError(err));
    console.error('Error saving data:', err);
  }
}

function* removeDatatoLocalStorage() {
  try {
    yield call(deleteDataToLocalStorage);
  } catch (err) {
    yield put(actions.setDataError(err));
    console.error('Error on remove item:', err);
  }
}

export default [
  takeLatest(actions.clearData, removeDatatoLocalStorage),
  takeEvery(actions.setDataRequest, setDatatoLocalStorage),
];
