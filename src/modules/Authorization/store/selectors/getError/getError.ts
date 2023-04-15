import { createSelector } from '@reduxjs/toolkit';
import { AuthSchema } from '../../types/authSchema';
import { getAuth } from '../getAuth/getAuth';

export const getError = createSelector(
  getAuth,
  (user: AuthSchema) => user?.error,
);
