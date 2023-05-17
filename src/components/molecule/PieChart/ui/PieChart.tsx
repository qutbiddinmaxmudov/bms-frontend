import React from 'react';
import {
  Chart as ChartJS, ArcElement, Tooltip, Legend,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: any
  name: string
}

const PieChart: React.FC<PieChartProps> = ({ data, name }) => {
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
    <Pie options={options} data={data} />
  );
};

export { PieChart };
