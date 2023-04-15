import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { customerReducer } from '../../../../modules/Authorization/store/slice/customerSlice';

import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    customer: customerReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    preloadedState: initialState,
  });
}
