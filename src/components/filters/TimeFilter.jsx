import React from 'react';
import { useTime, TIME_PERIODS } from '../../contexts/TimeContext';

const TIME_PERIOD_LABELS = {
  [TIME_PERIODS.LAST_24_HOURS]: 'Last 24 hours',
  [TIME_PERIODS.LAST_7_DAYS]: 'Last 7 days',
  [TIME_PERIODS.LAST_30_DAYS]: 'Last 30 days',
};

const TimeFilter = () => {
  const { timePeriod, setTimePeriod } = useTime();

  return (
    <select
      value={timePeriod}
      onChange={(e) => setTimePeriod(e.target.value)}
      className="text-sm border-gray-200 rounded-lg text-gray-600"
    >
      {Object.entries(TIME_PERIOD_LABELS).map(([value, label]) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}

export default TimeFilter;