import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


const BarChart = ({ options, datasets, labels, ...props }) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



  const data = {
    labels,
    datasets,
  };

  return <Bar options={options} data={data} {...props} />
}

export default BarChart