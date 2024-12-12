/**
 * Component for displaying country-wise COVID-19 statistics in a bar chart
 * @param {Array} countryData - Array of country statistics
 * @param {boolean} loading - Loading state
 */
import React from 'react';
import { Card } from 'antd';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { chartDefaults } from '../../config/chart';
import { useChartData } from './useChartData';
import { chartStyles } from './styles';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CountryChart = ({ countryData, loading }) => {
  const data = useChartData(countryData);
  
  return (
    <Card 
      title="Country Statistics" 
      bordered={false}
      loading={loading}
      style={chartStyles.card}
    >
      <div style={chartStyles.container}>
        <Bar options={chartDefaults} data={data} />
      </div>
    </Card>
  );
};

export default React.memo(CountryChart);