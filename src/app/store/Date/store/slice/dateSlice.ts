import { createSlice } from '@reduxjs/toolkit';
import { getStringDate } from 'components/molecule/DateRangeForm/assets/date/date';
import { DateSchema } from '../types/dateSchema';

const initialState: DateSchema = {
  startDate: getStringDate(),
  endDate: getStringDate(),
  comparisonMode: false,
  comparisonStartDate: null,
  comparisonEndDate: null,
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    setStartDate: (state, action) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.endDate = action.payload;
    },
    setComparisonMode: (state) => {
      state.comparisonMode = !state.endDate;
    },
    setComparisonStartDate: (state, action) => {
      state.endDate = action.payload;
    },
    setComparisonEndDate: (state, action) => {
      state.endDate = action.payload;
    },
  },

});

export const { reducer: dateReducer } = dateSlice;
export const {
  setStartDate, setEndDate, setComparisonMode, setComparisonStartDate, setComparisonEndDate,
} = dateSlice.actions;
