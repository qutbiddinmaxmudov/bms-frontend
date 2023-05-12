import React, { useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { DrawerMain } from 'components/molecule/DrawerMain';
import { DateRangeForm } from 'components/molecule/DateRangeForm';

import { Title } from 'components/atom/Title';
import { ChartBoard } from 'components/organism/ChartBoard';
import { useDispatch, useSelector } from 'react-redux';
import { getObjectDate, getStringDate } from 'components/molecule/DateRangeForm/assets/date/date';
import {
  getDate,
  getEndDate, getStartDate, setEndDate, setStartDate,
} from '../../../app/store/Date';

const drawerWidth = 240;

const MainPage: React.FC = () => {
  const isOpen: boolean = useOutletContext();

  const rangeDate = useSelector(getDate);
  const startDate = useSelector(getStartDate);
  const endDate = useSelector(getEndDate);

  const prevStartDate = useRef();
  const prevEndDate = useRef();

  const [isDisabledButton, setDisabledButton] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [gettingRangeDate, setGettingRangeDate] = useState<any>(null);

  const dispatch: any = useDispatch();

  const onChangeStartDate = (value: string) => {
    dispatch(setStartDate(getStringDate(value)));
  };

  useEffect(() => {
    if (startDate === prevStartDate.current) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [startDate]);

  const onChangeEndDate = (value: string) => {
    dispatch(setEndDate(getStringDate(value)));
  };

  useEffect(() => {
    if (endDate === prevEndDate.current) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  }, [endDate]);

  const onClickShowButton = () => {
    setLoading(true);
    setGettingRangeDate(rangeDate);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
    setTimeout(() => {
      setDisabledButton(true);
    }, 1500);

    prevStartDate.current = startDate;
    prevEndDate.current = endDate;
  };

  return (
    <DrawerMain
      drawerWidth={drawerWidth}
      isOpen={isOpen}
    >
      <Title title="metrics" />
      <DateRangeForm
        onClickShowButton={onClickShowButton}
        isDisbledButton={isDisabledButton}
        isLoading={isLoading}
        startDate={getObjectDate(startDate)}
        endDate={getObjectDate(endDate)}
        changeStartDate={onChangeStartDate}
        changeEndDate={onChangeEndDate}
        styles={{
          mb: '60px',
        }}
      />
      <ChartBoard
        date={gettingRangeDate}
        isLoading={isLoading}
      />
    </DrawerMain>

  );
};

export default MainPage;
