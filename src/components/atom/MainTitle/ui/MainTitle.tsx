import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Box, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface MainTitleProps {
  title: string,
  styles?: CSSProperties
}

const MainTitle: React.FC<PropsWithChildren<MainTitleProps>> = ({ title, children, styles }) => (
  <Box
    sx={{
      textAlign: 'center',
      ...styles,
    }}
  >
    <Typography variant="h3" sx={{ textTransform: 'uppercase' }}>
      {title}
    </Typography>
    <Typography paragraph>
      {children}
    </Typography>
  </Box>

);

export { MainTitle };
