/* eslint-disable react/require-default-props */
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/storeConfig';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
}

export function StoreProvider(props: StoreProviderProps) {
  const {
    children,
    initialState,
  } = props;

  const store = createReduxStore(initialState as StateSchema);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
