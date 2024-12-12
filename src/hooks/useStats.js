/**
 * Custom hook for fetching and managing COVID-19 statistics
 * @returns {Object} Object containing statistics data, loading state, error state, and refetch function
 */
import { useState, useEffect, useCallback } from 'react';
import { message } from 'antd';
import { fetchGlobalStats, fetchCountryStats } from '../api/covidApi';
import { useTime } from '../contexts/TimeContext';

export const useStats = () => {
  const [state, setState] = useState({
    globalStats: null,
    countryStats: [],
    loading: true,
    error: null
  });
  const { timePeriod } = useTime();

  const fetchData = useCallback(async () => {
    try {
      setState(prev => ({ ...prev, loading: true }));
      const [global, countries] = await Promise.all([
        fetchGlobalStats(timePeriod),
        fetchCountryStats(timePeriod)
      ]);
      
      setState({
        globalStats: global,
        countryStats: countries,
        loading: false,
        error: null
      });
    } catch (err) {
      setState(prev => ({
        ...prev,
        loading: false,
        error: 'Failed to fetch data'
      }));
      message.error('Error loading statistics');
    }
  }, [timePeriod]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { ...state, refetch: fetchData };
};