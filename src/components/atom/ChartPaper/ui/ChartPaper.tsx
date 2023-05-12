import { CSSProperties } from '@material-ui/core/styles/withStyles';
import {
  Backdrop, CircularProgress, Paper, Typography,
} from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface ChartPaperProps {
  styles?: CSSProperties
  name?: string,
  isLoading?: boolean
}

const ChartPaper: React.FC<PropsWithChildren<ChartPaperProps>> = ({
  styles, children, name, isLoading,
}) => (

  <Paper
    sx={{
      p: '20px',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      textAlign: 'center',
      ...styles,
      position: 'relative',
    }}
    elevation={2}
  >
    <Backdrop
      sx={{ color: '#fff', position: 'absolute', borderRadius: 'inherit' }}
      open={!!isLoading}
    >
      <CircularProgress color="inherit" />
    </Backdrop>

    <Typography sx={{ mb: '12px' }} variant="h4">
      {name}
    </Typography>
    {children}
  </Paper>
);

export { ChartPaper };
