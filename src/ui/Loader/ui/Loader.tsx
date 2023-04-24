import React from 'react';
import { CircularProgress } from '@mui/material';

export function Loader() {
  return (
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
}
