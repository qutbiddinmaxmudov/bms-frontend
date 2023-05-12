import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { customerReducer } from '../../../../modules/Authorization/store/slice/customerSlice';
import { dateReducer } from '../../Date';

import { StateSchema } from './StateSchema';

const createReduxStore = (initialState?: StateSchema) => {
  const rootReducers: ReducersMapObject<StateSchema> = {
    customer: customerReducer,
    date: dateReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
};

export { createReduxStore };
