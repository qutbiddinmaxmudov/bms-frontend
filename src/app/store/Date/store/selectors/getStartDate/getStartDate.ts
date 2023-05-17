import { createSelector } from '@reduxjs/toolkit';
import { getDate } from '../getDate/getDate';

export const getStartDate = createSelector(
  getDate,
  (date) => date.startDate,
);
