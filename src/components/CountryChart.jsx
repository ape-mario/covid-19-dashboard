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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CountryChart = ({ countryData }) => {
  const topCountries = countryData
    .sort((a, b) => b.cases - a.cases)
    .slice(0, 10);

  const data = {
    labels: topCountries.map(country => country.country),
    datasets: [
      {
        label: 'Total Cases',
        data: topCountries.map(country => country.cases),
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        borderColor: 'rgb(59, 130, 246)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Top 10 Countries by Total Cases',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Bar options={options} data={data} />
    </div>
  );
};

export default CountryChart;