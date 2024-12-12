import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { BarChartOutlined } from '@ant-design/icons';
import { headerStyles as styles } from './styles';

const { Header: AntHeader } = Layout;
const { Title, Text } = Typography;

const Header = () => (
  <AntHeader style={styles.header}>
    <div style={styles.container}>
      <Space align="center">
        <BarChartOutlined style={styles.icon} />
        <div>
          <Title level={3} style={styles.title}>COVID-19 Dashboard</Title>
          <Text type="secondary">Real-time global statistics and insights</Text>
        </div>
      </Space>
    </div>
  </AntHeader>
);

export default Header;