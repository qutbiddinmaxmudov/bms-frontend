import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { Box, Typography } from '@mui/material';
import React, { PropsWithChildren } from 'react';

interface TitleProps {
  title: string,
  styles?: CSSProperties;
}

const Title: React.FC<PropsWithChildren<TitleProps>> = ({ title, children, styles }) => (
  <Box
    sx={{ ...styles }}
  >
    <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
      {title}
    </Typography>
    <Typography paragraph>
      {children}
    </Typography>
  </Box>

);

export { Title };
