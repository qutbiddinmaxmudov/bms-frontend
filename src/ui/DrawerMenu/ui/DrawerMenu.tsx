import React, { PropsWithChildren } from 'react';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

import logo from '../logo.png';

interface DrawerMenuProps {
  menuWidth: number;
  isOpen: boolean;
  handleDrawerClose: () => void;
}

const DrawerMenu: React.FC<PropsWithChildren<DrawerMenuProps>> = ({
  menuWidth,
  isOpen,
  handleDrawerClose,
  children,
}) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        width: menuWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: menuWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            ml: '8px',
            mr: 'auto',
          }}
        >
          <img src={logo} width="50px" alt="logo" />
          BMS
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </Box>
      <Divider />
      {children}
      <Divider />
    </Drawer>
  );
};
export default DrawerMenu;
