import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';

interface ToggleButtonListProps {
  list: string[]
  onClick: (p: string) => void
}

function ToggleButtonList(props: ToggleButtonListProps) {
  const { list, onClick } = props;

  return (
    <ToggleButtonGroup
      sx={{
        mb: 2,
      }}
      color="primary"
      exclusive
      aria-label="Platform"
      size="small"
      onChange={(evt, value) => onClick(value)}
    >
      {list.map((item) => (
        <ToggleButton
          sx={{
            border: 'none',
          }}
          value={item.toLowerCase()}
        >{item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
}

export default ToggleButtonList;
