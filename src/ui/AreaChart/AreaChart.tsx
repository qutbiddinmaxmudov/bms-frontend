import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,

} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
);

interface PieChartProps {
  height: number
  data: any
  name: string
}

export function AreaChart(props: PieChartProps) {
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
        display: false,
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
      <Line options={options} data={data} />
    </Box>
  );
}
