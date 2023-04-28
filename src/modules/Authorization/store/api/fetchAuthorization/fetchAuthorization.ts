import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { HeadersDefaults } from 'axios';
import { UserSchema } from '../../types/userShema';

const USER_LOCALSTORAGE_KEY = 'user';

const api = axios.create({
  baseURL: import.meta.env.BACKEND_URL,
});

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const fetchAuthorization = createAsyncThunk<UserSchema, undefined, { rejectValue: any }>(
  'users/fetchAuth',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/profile');
      return response.data as UserSchema;
    } catch (err: any) {
      const { response } = err;
      return rejectWithValue(response.data);
    }
  },
  {
    condition: () => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
      if (!user) {
        return false;
      }
      api.defaults.headers = {
        Authorization: `Bearer ${user}`,
      } as CommonHeaderProperties;
      return true;
    },
    dispatchConditionRejection: true,
  },

);
