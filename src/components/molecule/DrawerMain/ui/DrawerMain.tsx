import React, { ReactNode } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

interface DrawerMainProps {
  children: ReactNode;
  drawerWidth: number;
  isOpen: boolean;
}

const DrawerMain: React.FC<DrawerMainProps> = ({ children, drawerWidth, isOpen }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 8,
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(isOpen && {
          transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        }),
      }}
    >
      {children}
    </Box>
  );
};

export { DrawerMain };
