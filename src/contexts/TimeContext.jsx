import React, { createContext, useContext, useState } from 'react';

const TimeContext = createContext();

export const TIME_PERIODS = {
  LAST_24_HOURS: 'last24hours',
  LAST_7_DAYS: 'last7days',
  LAST_30_DAYS: 'last30days',
};

export function TimeProvider({ children }) {
  const [timePeriod, setTimePeriod] = useState(TIME_PERIODS.LAST_24_HOURS);

  return (
    <TimeContext.Provider value={{ timePeriod, setTimePeriod }}>
      {children}
    </TimeContext.Provider>
  );
}

export const useTime = () => {
  const context = useContext(TimeContext);
  if (!context) {
    throw new Error('useTime must be used within a TimeProvider');
  }
  return context;
};