import React from 'react';
import { CircularProgress } from '@mui/material';

const Loader: React.FC = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
  }}
  >
    <CircularProgress />
  </div>
);

export { Loader };
