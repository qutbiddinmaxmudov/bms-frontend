import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ILogin {
  username: string;
  password: string;
}

const createAPI = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    timeout: +import.meta.env.VITE_REQUEST_TIMEOUT,
  });

  return api;
};

const api = createAPI();

export const fetchLogin = createAsyncThunk<any, ILogin, { rejectValue: any }>(
  'users/fetchLogin',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem(
        import.meta.env.VITE_USER_LOCALSTORAGE_KEY,
        response.data.access.access_token,
      );
      return response.data.user;
    } catch (err: any) {
      const { response } = err;
      return rejectWithValue(response.data);
    }
  },
  {
    dispatchConditionRejection: true,
  },
);
