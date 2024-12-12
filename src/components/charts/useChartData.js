/**
 * Custom hook for transforming country data into chart-compatible format
 * @param {Array} countryData - Array of country statistics
 * @returns {Object} Formatted data for Chart.js
 */
import { useMemo } from 'react';
import { colors } from '../../config/chart';

export const useChartData = (countryData) => {
  return useMemo(() => {
    const topCountries = countryData
      ?.sort((a, b) => b.cases - a.cases)
      .slice(0, 10) || [];

    return {
      labels: topCountries.map(country => country.country),
      datasets: [
        {
          label: 'Total Cases',
          data: topCountries.map(country => country.cases),
          backgroundColor: colors.primary,
          borderColor: colors.primaryDark,
          borderWidth: 1,
        },
      ],
    };
  }, [countryData]);
};