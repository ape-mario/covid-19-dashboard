import { BeakerIcon, ExclamationTriangleIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export const STATS_CONFIG = [
  {
    id: 'tests',
    label: 'Total Tests',
    icon: BeakerIcon,
    value: (data) => data.tests,
    historical: (data) => data.tests,
  },
  {
    id: 'critical',
    label: 'Critical Cases',
    icon: ExclamationTriangleIcon,
    value: (data) => data.critical,
    historical: (data) => data.critical,
  },
  {
    id: 'casesPerMillion',
    label: 'Cases Per Million',
    icon: ChartBarIcon,
    value: (data) => data.casesPerOneMillion,
    historical: (data) => data.casesPerOneMillion,
  }
];