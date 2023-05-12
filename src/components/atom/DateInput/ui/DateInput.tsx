import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { DatePicker } from '@mui/x-date-pickers';
import { Dayjs } from 'dayjs';
import React from 'react';

interface DateInputProps {
  isDisabled?: boolean
  maxDate?: Dayjs
  minDate?: Dayjs
  onChange: (p: (Dayjs)) => void
  value?: Dayjs
  label?: string
  styles?: CSSProperties
}

const DateInput: React.FC<DateInputProps> = ({
  maxDate, onChange, value, label, minDate, styles, isDisabled,
}) => (
  <DatePicker
    sx={{
      ...styles,
    }}
    slotProps={{
      textField: { size: 'small' },
    }}
    disabled={isDisabled}
    maxDate={maxDate}
    minDate={minDate}
    label={label}
    value={value}
    onChange={(newValue) => {
      onChange(newValue as Dayjs);
    }}
    format="D MMMM YYYY"
  />
);

export { DateInput };
