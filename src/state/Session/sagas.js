import { call, takeLatest, put } from 'redux-saga/effects';
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
    yield call(saveDataToLocalStorage, payload);
    console.log(payload, 'payload');
    yield put(actions.setDataSuceeded(payload));
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
  takeLatest(actions.setDataRequest, setDatatoLocalStorage),
  takeLatest(actions.clearData, removeDatatoLocalStorage),
];
