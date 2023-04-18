import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USER_LOCALSTORAGE_KEY = 'user';

interface ILogin {
  username: string;
  password: string;
}

const BACKEND_URL = 'https://bms-backend-production.up.railway.app';
const REQUEST_TIMEOUT = 5000;

const createAPI = () => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};

const api = createAPI();

export const fetchLogin = createAsyncThunk<any, ILogin, { rejectValue: any }>(
  'users/fetchLogin',
  async ({ username, password }, { rejectWithValue }) => {
    // const { username, password } = loginData;
    try {
      const response = await api.post('/auth/login', { username, password });
      localStorage.setItem(USER_LOCALSTORAGE_KEY, response.data.access.access_token);
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
