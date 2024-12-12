import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { formatNumber } from '../utils/formatters';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const setupChartConfig = (countries, hoveredBar, setHoveredBar) => {
  const data = {
    labels: countries.map(country => country.country),
    datasets: [
      {
        label: 'Total Cases',
        data: countries.map(country => country.cases),
        backgroundColor: Array(countries.length)
          .fill('rgba(99, 102, 241, 0.5)')
          .map((color, index) => 
            index === hoveredBar ? 'rgba(99, 102, 241, 0.8)' : color
          ),
        borderColor: 'rgb(99, 102, 241)',
        borderWidth: 1,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    onHover: (event, elements) => {
      setHoveredBar(elements.length > 0 ? elements[0].index : null);
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Inter, system-ui, sans-serif',
            weight: '500'
          }
        }
      },
      title: {
        display: true,
        text: 'Top 10 Countries by Total Cases',
        font: {
          family: 'Inter, system-ui, sans-serif',
          size: 16,
          weight: '600'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#1f2937',
        bodyColor: '#4b5563',
        borderColor: '#e5e7eb',
        borderWidth: 1,
        padding: 12,
        bodyFont: {
          family: 'Inter, system-ui, sans-serif'
        },
        titleFont: {
          family: 'Inter, system-ui, sans-serif',
          weight: '600'
        },
        callbacks: {
          label: (context) => `Cases: ${formatNumber(context.raw)}`
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: value => formatNumber(value),
          font: {
            family: 'Inter, system-ui, sans-serif'
          }
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        ticks: {
          font: {
            family: 'Inter, system-ui, sans-serif'
          }
        },
        grid: {
          display: false
        }
      }
    }
  };

  return { data, options };
};