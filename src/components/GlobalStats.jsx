import React from 'react';
import { 
  UserGroupIcon, 
  HeartIcon, 
  ArrowTrendingUpIcon 
} from '@heroicons/react/24/solid';

const StatCard = ({ title, value, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center">
      <Icon className="h-8 w-8 text-blue-500 mr-3" />
      <div>
        <h3 className="text-gray-500 text-sm">{title}</h3>
        <p className="text-2xl font-bold">{value.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

const GlobalStats = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <StatCard
        title="Total Cases"
        value={stats.cases}
        icon={UserGroupIcon}
      />
      <StatCard
        title="Recovered"
        value={stats.recovered}
        icon={HeartIcon}
      />
      <StatCard
        title="Active Cases"
        value={stats.active}
        icon={ArrowTrendingUpIcon}
      />
    </div>
  );
};

export default GlobalStats;