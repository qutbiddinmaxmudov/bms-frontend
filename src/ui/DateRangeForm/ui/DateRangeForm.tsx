import React, { useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import {
  Box, Button,
} from '@mui/material';
import ToggleButtonList from '../../ToggleButtonList/ui/ToggleButtonList';

dayjs.extend(weekday);
dayjs.extend(dayOfYear);

const toggleList = ['Yesterday', 'Today', 'Tomorrow', 'Week', 'Month', 'Year'];

export function DateRangeForm() {
  const [startDate, setStartDate] = useState(dayjs());
  const [endDate, setEndDate] = useState(dayjs());

  const onClickToggleButton = (value: string) => {
    switch (value) {
      case 'yesterday':
        setStartDate(dayjs().dayOfYear(dayjs().dayOfYear() - 1));
        setEndDate(dayjs().dayOfYear(dayjs().dayOfYear() - 1));
        break;
      case 'today':
        setStartDate(dayjs());
        setEndDate(dayjs());
        break;
      case 'tomorrow':
        setStartDate(dayjs().dayOfYear(dayjs().dayOfYear() + 1));
        setEndDate(dayjs().dayOfYear(dayjs().dayOfYear() + 1));
        break;
      case 'week':
        setStartDate(dayjs().weekday(0));
        setEndDate(dayjs().weekday(6));
        break;
      case 'month':
        setStartDate(dayjs().date(1));
        setEndDate(dayjs().date(dayjs().daysInMonth()));
        break;
      case 'year':
        setStartDate(dayjs().weekday(0));
        setEndDate(dayjs().weekday(6));
        break;

      default:
        break;
    }
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
      }}
    >
      <ToggleButtonList
        list={toggleList}
        onClick={onClickToggleButton}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box>
          <DatePicker
            sx={{
              mr: 2,
            }}
            maxDate={endDate}
            label="Start date"
            value={startDate}
            onChange={(newValue:any) => {
              setStartDate(newValue);
            }}
          />
          <DatePicker
            minDate={startDate}
            label="End date"
            value={endDate}
            onChange={(newValue:any) => setEndDate(newValue)}
          />
        </Box>
        <Button
          variant="contained"
          type="button"
          sx={{
            mt: 2,
          }}
        >
          Show
        </Button>
      </LocalizationProvider>

    </Box>

  );
}
