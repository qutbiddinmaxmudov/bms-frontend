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
  data: any
  name: string
}

const AreaChart: React.FC<PieChartProps> = ({ data, name }) => {
  const options = {
    plugins: {
      title: {
        display: false,
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
    <Line options={options} data={data} />
  );
};

export { AreaChart };
