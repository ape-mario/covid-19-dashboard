/**
 * Chart.js default configuration and theme colors
 */
export const chartDefaults = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: value => value.toLocaleString()
      }
    }
  }
};

export const colors = {
  primary: '#1890ff',
  primaryDark: '#096dd9',
};