import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  height: number
  data: any
  name: string
}

export const PieChart = (props: PieChartProps) => {
  const { height, data, name } = props;

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: name,
      },
      tooltip: {
        intersect: false,
      },
      legend: {
        display: true,
      },
    },
  };

  return (
    <Box
      sx={{
        maxHeight: `${height}px`,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Pie options={options} data={data} />
    </Box>
  );
};
