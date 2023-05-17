import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { DrawerMain } from 'components/molecule/DrawerMain';
import { Title } from 'components/atom/Title';

const drawerWidth = 240;

const SettingPage: React.FC = () => {
  const isOpen: boolean = useOutletContext();

  return (
    <DrawerMain
      drawerWidth={drawerWidth}
      isOpen={isOpen}
    >
      <Title title="settings" />
    </DrawerMain>

  );
};

export default SettingPage;
