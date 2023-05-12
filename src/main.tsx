import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './app/App';
import { StoreProvider } from './app/store/StoreProvider';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>,
);
