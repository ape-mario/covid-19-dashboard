import { 
  UserGroupIcon, 
  HeartIcon, 
  ArrowTrendingUpIcon,
  XCircleIcon 
} from '@heroicons/react/24/solid';

export const STATS_CONFIG = [
  {
    title: 'Total Cases',
    value: 'cases',
    todayValue: 'todayCases',
    icon: UserGroupIcon,
    color: 'indigo'
  },
  {
    title: 'Recovered',
    value: 'recovered',
    todayValue: 'todayRecovered',
    icon: HeartIcon,
    color: 'green'
  },
  {
    title: 'Active Cases',
    value: 'active',
    icon: ArrowTrendingUpIcon,
    color: 'amber'
  },
  {
    title: 'Deaths',
    value: 'deaths',
    todayValue: 'todayDeaths',
    icon: XCircleIcon,
    color: 'red'
  }
];