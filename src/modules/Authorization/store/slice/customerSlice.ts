/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { fetchAuthorization } from '../api/fetchAuthorization/fetchAuthorization';
import { fetchLogin } from '../api/fetchLogin/fetchLogin';
import { CustomerSchema } from '../types/customerShema';

const initialState: CustomerSchema = {
  auth: {
    isCheckAuth: false,
  },
};

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorization.fulfilled, (state, action) => {
      state.user = action.payload;
      state.auth.isCheckAuth = true;
      delete state.auth.error;
    });
    builder.addCase(fetchAuthorization.pending, (state) => {
      state.auth.isCheckAuth = false;
      delete state.auth.error;
    });
    builder.addCase(fetchAuthorization.rejected, (state, action) => {
      if (action.meta.condition) {
        state.auth.isCheckAuth = true;
      } else {
        delete state.user;
        state.auth.isCheckAuth = true;
        state.auth.error = action.payload.message;
      }
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.user = action.payload;
      state.auth.isCheckAuth = true;
      delete state.auth.error;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.auth.error = action.payload.message;
      state.auth.isCheckAuth = true;
      delete state.user;
    });
  },
});

export const { reducer: customerReducer } = customerSlice;
