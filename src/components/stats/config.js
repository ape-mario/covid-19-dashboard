/**
 * Configuration for statistical cards
 * Defines the properties and appearance of each stat category
 */
import { 
  UserOutlined, 
  HeartOutlined, 
  RiseOutlined,
  CloseCircleOutlined
} from '@ant-design/icons';
import { colors } from '../../config/colors';

export const statsConfig = [
  {
    key: 'cases',
    title: 'Total Cases',
    icon: UserOutlined,
    color: colors.cases,
  },
  {
    key: 'recovered',
    title: 'Recovered',
    icon: HeartOutlined,
    color: colors.recovered,
  },
  {
    key: 'active',
    title: 'Active Cases',
    icon: RiseOutlined,
    color: colors.active,
  },
  {
    key: 'deaths',
    title: 'Deaths',
    icon: CloseCircleOutlined,
    color: colors.deaths,
  }
];