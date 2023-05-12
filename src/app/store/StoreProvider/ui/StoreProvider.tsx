import React, { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/storeConfig';

type Props = {
  initialState?: DeepPartial<StateSchema>;
};

const StoreProvider: React.FC<PropsWithChildren<Props>> = ({ initialState, children }) => {
  const store = createReduxStore(initialState as StateSchema);

  return <Provider store={store}>{children}</Provider>;
};

export { StoreProvider };
