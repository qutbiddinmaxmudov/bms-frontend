import React from 'react';
import { BaseTable } from 'components/molecule/BaseTable';
import { AreaChart } from 'components/molecule/AreaChart';
import { PieChart } from 'components/molecule/PieChart';
import {
  Alert,
  CircularProgress,
  Grid,
  IconButton,
  useTheme,
} from '@mui/material';
import { ChartPaper } from 'components/atom/ChartPaper';
import { CheckCircleOutline } from '@mui/icons-material';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import { Box } from '@mui/system';

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

const dataAreaChart = {
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

interface ChartBoardProps {
  date: any
  isLoading?: boolean
}

const ChartBoard: React.FC<ChartBoardProps> = ({ date, isLoading }) => {
  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '45px',
        }}
      >
        <Alert
          sx={{
            display: 'inline-block',
            ...(!date && { opacity: '0' }),
            ...(date && { opacity: '1' }),
            ...(isLoading && { bgcolor: '#4fc3f7' }),
            height: '87px',
            transition: theme.transitions.create(['opacity'], {
              easing: theme.transitions.easing.easeOut,
              duration: 500,
            }),
          }}
          icon={isLoading ? <CircularProgress size="24px" /> : <CheckCircleOutline />}
        >
          <strong>{date ? `${date?.startDate.replace(/-/g, ' ')} — ${date?.endDate.replace(/-/g, ' ')}` : ''}</strong>
        </Alert>
        <IconButton aria-label="reload data">
          <ReplayRoundedIcon
            fontSize="large"
          />
        </IconButton>
      </Box>

      <Grid
        alignItems="flex-start"
        justifyContent="space-evenly"
        container
        spacing={2}
      >
        {isLoading}
        <Grid item xs={9}>
          <ChartPaper
            name="Table"
            isLoading={isLoading}
          >
            <BaseTable />
          </ChartPaper>

        </Grid>
        <Grid item xs={6}>
          <ChartPaper
            name="Transaction 2"
            isLoading={isLoading}
          >
            <AreaChart
              data={dataAreaChart}
              name="Transaction"
            />
          </ChartPaper>

        </Grid>
        <Grid item xs={6}>
          <ChartPaper
            name="Transaction 1"
            isLoading={isLoading}
          >
            <AreaChart
              data={dataAreaChart}
              name="Transaction"
            />
          </ChartPaper>

        </Grid>
        <Grid item xs={4}>
          <ChartPaper
            name="Pie"
            isLoading={isLoading}
          >
            <PieChart
              data={dataPieChart}
              name="Expense segments"
            />
          </ChartPaper>

        </Grid>
      </Grid>
    </>
  );
};
export { ChartBoard };
