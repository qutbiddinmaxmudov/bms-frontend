import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link, useLocation } from 'react-router-dom';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

interface LinkListProps {
  linkList: {
    text: string;
    icon: JSX.Element;
    link: string;
  }[],
  styles?: CSSProperties;
}

const LinkList: React.FC<LinkListProps> = ({ linkList, styles }) => {
  const location = useLocation();
  const currentLocation = location.pathname;
  return (
    <List
      sx={{
        ...styles,
      }}
    >
      {linkList.map(({ text, icon, link }) => (
        <Link
          key={text}
          to={link}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton
              selected={link === currentLocation}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export { LinkList };
