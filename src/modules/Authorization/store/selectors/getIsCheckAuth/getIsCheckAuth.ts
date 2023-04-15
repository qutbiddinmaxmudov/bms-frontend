import { createSelector } from '@reduxjs/toolkit';
import { AuthSchema } from '../../types/authSchema';
import { getAuth } from '../getAuth/getAuth';

export const getIsCheckAuth = createSelector(
  getAuth,
  (user: AuthSchema) => user.isCheckAuth,
);
