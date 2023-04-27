import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { useTheme } from '@mui/material/styles';
import {
  IconButton, Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { UserInfo } from '../../UserInfo';

interface NavBarProps extends MuiAppBarProps {
  user: {
    userName: string;
    role: string;
  };
  isOpen: boolean;
  offsetWidth: number;
  handleDrawerOpen: () => void;
}

export function DrawerNavBar(props: NavBarProps) {
  const theme = useTheme();

  const {
    isOpen, offsetWidth, handleDrawerOpen, user,
  } = props;
  return (
    <MuiAppBar
      sx={{
        padding: '0 15px',
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        ...(isOpen && {
          width: `calc(100% - ${offsetWidth}px)`,
          marginLeft: `${offsetWidth}px`,
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
        }),
      }}
      position="fixed"
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',

        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            mr: 2,
            ...(isOpen && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <UserInfo
          name={user.userName}
          role={user.role}
        />
      </Toolbar>
    </MuiAppBar>
  );
}
