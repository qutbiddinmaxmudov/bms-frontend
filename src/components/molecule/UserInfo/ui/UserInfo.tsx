import React from 'react';
import { Avatar, Box, Typography } from '@mui/material';

interface UserInfoProps {
  name: string;
  role: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, role }) => (
  <>
    <Box
      sx={{
        ml: 'auto',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="caption"
        noWrap
        component="div"
        sx={{
          fontSize: 15,
        }}
      >
        {name}
      </Typography>
      <Typography
        variant="caption"
        noWrap
        component="div"
        sx={{
          fontSize: 10,
        }}
      >
        {role}
      </Typography>
    </Box>

    <Avatar
      sx={{
        bgcolor: 'grey',
        ml: 2,
      }}
    >
      N
    </Avatar>
  </>
);

export { UserInfo };
