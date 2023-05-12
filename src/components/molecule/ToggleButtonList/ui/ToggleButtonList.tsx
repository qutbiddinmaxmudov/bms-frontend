import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { DatePeriod } from 'components/molecule/DateRangeForm/assets/date/date';
import React from 'react';

interface ToggleButtonListProps {
  list: string[]
  onClick: (p: DatePeriod) => void
  activeItem?: string | null
  styles?: CSSProperties
}

const ToggleButtonList: React.FC<ToggleButtonListProps> = ({
  list, onClick, activeItem, styles,
}) => {
  const onChange = (evt: React.MouseEvent<HTMLElement, MouseEvent>, value: DatePeriod) => {
    onClick(value);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      exclusive
      aria-label="Platform"
      size="small"
      onChange={onChange}
      value={activeItem}
      sx={{
        ...styles,
      }}
    >
      {list.map((item) => (
        <ToggleButton
          sx={{
            fontSize: '11px',
            py: '4px',
            color: 'black',
          }}
          key={item}
          value={item.toLowerCase()}
        >{item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export { ToggleButtonList };
