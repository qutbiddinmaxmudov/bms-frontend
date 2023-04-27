import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { DrawerNavBar } from '../../ui/DrawerNavBar';
import { DrawerMenu } from '../../ui/DrawerMenu';
import { LinkList } from '../../ui/LinkList';

const drawerWidth = 240;

const inf = {
  userName: 'Vlad',
  role: 'Admin',
};

const linkList = [
  {
    text: 'Main',
    icon: <AnalyticsIcon />,
    link: '/',
  },
  {
    text: 'Settings',
    icon: <SettingsApplicationsIcon />,
    link: '/setting',
  },
];

const Layout = () => {
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="xl">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <DrawerNavBar
          isOpen={open}
          offsetWidth={drawerWidth}
          handleDrawerOpen={handleDrawerOpen}
          user={inf}
        />
        <DrawerMenu
          menuWidth={drawerWidth}
          handleDrawerClose={handleDrawerClose}
          isOpen={open}
        >
          <LinkList linkList={linkList} />
        </DrawerMenu>
        <Outlet context={open} />
      </Box>
    </Container>
  );
};

export default Layout;
