import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

interface LinkListProps {
  linkList: {
    text: string,
    icon: JSX.Element,
    link: string,
  }[];
}

export function LinkList(props: LinkListProps) {
  const { linkList } = props;
  return (
    <List>
      {linkList.map(({ text, icon, link }) => (
        <Link
          to={link}
          style={{
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
}
