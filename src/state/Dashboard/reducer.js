import { createSlice } from '@reduxjs/toolkit';
import { dashboardData } from './initialState';

const tableSlice = createSlice({
  name: 'dashboard',
  initialState: dashboardData,
  reducers: {
    setDataTableRequest: (state) => {
      state.isLoading = true;
    },
    setDataTableSuceeded: (state, { payload }) => {
      state.data = payload;
      state.isLoading = false;
    },
    setDataTableError: (state, { payload }) => {
      state.data = payload;
      state.isLoading = true;
    },
    clearDataTable: (state) => {
      state.data = [];
      state.isLoading = false;
      state.error = '';
    },
  },
});

export const {
  setDataTableRequest,
  clearDataTable,
  setDataTableSuceeded,
  setDataTableError,
} = tableSlice.actions;
export default tableSlice.reducer;
