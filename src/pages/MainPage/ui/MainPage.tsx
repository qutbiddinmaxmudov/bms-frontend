import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { Grid } from '@mui/material';
import { DrawerMain } from '../../../ui/DrawerMain';
import DateRangeForm from '../../../ui/DateRangeForm/ui/DateRangeForm';
import { AreaChart } from '../../../ui/AreaChart/AreaChart';
import { BaseTable } from '../../../ui/BaseTable/ui/BaseTable';
import { PieChart } from '../../../ui/PieChart/ui/PieChart';

const drawerWidth = 240;

const dataPieChart = {
  labels: ['Salary', 'Rent', 'Taxes', 'Raw material', 'Equipment'],
  datasets: [
    {
      label: '$',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export const dataAreaChart = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      fill: true,
      label: '$',
      data: [100, 200, 500, 600, 700, 300, 200],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const MainPage = () => {
  const isOpen: boolean = useOutletContext();
  return (
    <DrawerMain drawerWidth={drawerWidth} isOpen={isOpen}>
      <DateRangeForm />
      <Grid alignItems="center" justifyContent="center" container spacing={2}>
        <Grid item xs={12}>
          <BaseTable />
        </Grid>
        <Grid item xs={6}>
          <AreaChart height={300} data={dataAreaChart} name="Transaction" />
        </Grid>
        <Grid item xs={6}>
          <PieChart height={300} data={dataPieChart} name="Expense segments" />
        </Grid>
      </Grid>
    </DrawerMain>
  );
};

export default MainPage;
