import { createSelector } from '@reduxjs/toolkit';
import { getDate } from '../getDate/getDate';

export const getEndDate = createSelector(
  getDate,
  (date) => date.endDate,
);
