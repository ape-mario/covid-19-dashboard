import React from 'react';
import { METRICS, COUNTRY_COUNTS } from '../../utils/constants';
import SelectInput from '../common/SelectInput';

const ChartFilters = ({ metric, setMetric, count, setCount }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <SelectInput
        id="metric"
        label="Metric"
        value={metric}
        onChange={(e) => setMetric(e.target.value)}
        options={METRICS}
      />
      <SelectInput
        id="count"
        label="Number of Countries"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        options={COUNTRY_COUNTS.map(value => ({ value, label: value.toString() }))}
      />
    </div>
  );
};

export default ChartFilters;