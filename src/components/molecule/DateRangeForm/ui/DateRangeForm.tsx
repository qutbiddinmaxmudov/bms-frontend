import React, { useEffect, useState } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import {
  Box,
} from '@mui/material';
import { ToggleButtonList } from 'components/molecule/ToggleButtonList';
import { DateInput } from 'components/atom/DateInput';
import { SubmitButton } from 'components/atom/SubmitButton';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { DatePeriod, dateRatio, setDatePeriod } from '../assets/date/date';

const toggleList = ['Yesterday', 'Today', 'Tomorrow', 'Week', 'Month', 'Year'];

interface DateRangeFormProps {
  onClickShowButton: () => void;
  isDisbledButton?: boolean;
  isLoading?: boolean;
  styles?: CSSProperties;
  startDate: any;
  endDate: any;
  changeStartDate: (p: any) => void;
  changeEndDate: (p: any) => void;
}

const DateRangeForm: React.FC<DateRangeFormProps> = ({
  styles,
  startDate,
  endDate,
  changeStartDate,
  changeEndDate,
  isDisbledButton,
  onClickShowButton,
  isLoading,
}) => {
  const [activeButton, setActiveButton] = useState<DatePeriod | null>(null);

  const onClickToggleButton = (value: DatePeriod) => {
    const { firstDate, secondDate } = setDatePeriod(value, startDate, endDate);
    changeStartDate(firstDate);
    changeEndDate(secondDate);
  };

  useEffect(() => {
    setActiveButton(dateRatio(startDate, endDate));
  }, [startDate, endDate]);

  return (
    <Box
      sx={{
        textAlign: 'center',
        ...styles,
      }}
    >
      <ToggleButtonList
        activeItem={activeButton}
        list={toggleList}
        onClick={onClickToggleButton}
        styles={{
          mb: '25px',
        }}
      />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: '25px',
          }}
        >
          <DateInput
            isDisabled={isLoading}
            onChange={changeStartDate}
            value={startDate}
            maxDate={endDate}
            label="Start date"
            styles={{
              mr: '20px',
            }}
          />
          <DateInput
            isDisabled={isLoading}
            onChange={changeEndDate}
            value={endDate}
            minDate={startDate}
            label="End date"
            styles={{
            }}
          />
        </Box>
        <SubmitButton
          onClick={onClickShowButton}
          isDisabled={isDisbledButton}
          isLoading={isLoading}
          loadingText="SHOW..."
          styles={{
            width: '130px',
          }}
        >
          <p>SHOW</p>
        </SubmitButton>

      </LocalizationProvider>

    </Box>

  );
};

export { DateRangeForm };
