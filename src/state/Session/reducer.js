import { createSlice } from '@reduxjs/toolkit';
import { sessionUser } from './initialState';

const sessionSlice = createSlice({
  name: 'session',
  initialState: sessionUser,
  reducers: {
    setDataRequest: (state) => {
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    setDataSuceeded: (state, { payload }) => {
      state.users = payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    setDataError: (state, { payload }) => {
      state.error = payload;
      state.isLoading = true;
      state.isAuthenticated = false;
    },
    clearData: (state) => {
      state.users = [];
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { setDataRequest, clearData, setDataSuceeded, setDataError } =
  sessionSlice.actions;
export default sessionSlice.reducer;
