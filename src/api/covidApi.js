import axios from 'axios';
import { TIME_PERIODS } from '../contexts/TimeContext';

const BASE_URL = 'https://disease.sh/v3/covid-19';

const getHistoricalData = async (days = 30) => {
  const response = await axios.get(`${BASE_URL}/historical/all?lastdays=${days}`);
  return {
    tests: response.data.tests,
    critical: response.data.critical,
    casesPerOneMillion: response.data.casesPerOneMillion
  };
};

export const getGlobalData = async () => {
  const response = await axios.get(`${BASE_URL}/all`);
  return {
    tests: response.data.tests,
    critical: response.data.critical,
    casesPerOneMillion: response.data.casesPerOneMillion
  };
};

  // Get the latest and previous data points
  const dates = Object.keys(globalData.data.cases);
  const latestDate = dates[dates.length - 1];
  const previousDate = dates[0]; // First date in the range

  // Calculate the difference between latest and first date of the period
  const periodData = {
    global: {
      cases: globalData.data.cases[latestDate],
      deaths: globalData.data.deaths[latestDate],
      recovered: globalData.data.recovered?.[latestDate] || 0,
      // Calculate changes over the period
      todayCases: globalData.data.cases[latestDate] - globalData.data.cases[previousDate],
      todayDeaths: globalData.data.deaths[latestDate] - globalData.data.deaths[previousDate],
      todayRecovered: globalData.data.recovered ? 
        (globalData.data.recovered[latestDate] - globalData.data.recovered[previousDate]) : 0
    },
    countries: countriesData.data.map(country => ({
      country: country.country,
      cases: country.timeline.cases[latestDate],
      deaths: country.timeline.deaths[latestDate],
      recovered: country.timeline.recovered?.[latestDate] || 0,
      active: country.timeline.cases[latestDate] - 
              country.timeline.deaths[latestDate] - 
              (country.timeline.recovered?.[latestDate] || 0)
    }))
  };

  // Calculate active cases
  periodData.global.active = periodData.global.cases - 
                            periodData.global.deaths - 
                            periodData.global.recovered;

  return periodData;
};

export const fetchGlobalStats = async (timePeriod) => {
  try {
    switch (timePeriod) {
      case TIME_PERIODS.LAST_7_DAYS:
      case TIME_PERIODS.LAST_30_DAYS: {
        const days = timePeriod === TIME_PERIODS.LAST_7_DAYS ? 7 : 30;
        const data = await getHistoricalData(days);
        return data.global;
      }
      default: {
        // For last 24 hours, use the current data
        const response = await axios.get(`${BASE_URL}/all`);
        return response.data;
      }
    }
  } catch (error) {
    console.error('Error fetching global stats:', error);
    throw error;
  }
};

export const fetchCountryStats = async (timePeriod) => {
  try {
    switch (timePeriod) {
      case TIME_PERIODS.LAST_7_DAYS:
      case TIME_PERIODS.LAST_30_DAYS: {
        const days = timePeriod === TIME_PERIODS.LAST_7_DAYS ? 7 : 30;
        const data = await getHistoricalData(days);
        return data.countries;
      }
      default: {
        // For last 24 hours, use the current data
        const response = await axios.get(`${BASE_URL}/countries`);
        return response.data;
      }
    }
  } catch (error) {
    console.error('Error fetching country stats:', error);
    throw error;
  }
}