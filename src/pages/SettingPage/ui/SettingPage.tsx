import React from 'react';
import Typography from '@mui/material/Typography';
import { useOutletContext } from 'react-router-dom';
import { DrawerMain } from '../../../ui/DrawerMain';

const drawerWidth = 240;

const SettingPage = () => {
  const isOpen: boolean = useOutletContext();

  return (
    <DrawerMain
      drawerWidth={drawerWidth}
      isOpen={isOpen}
    >
      <Typography paragraph>
        Setting
      </Typography>
    </DrawerMain>

  );
};

export default SettingPage;
