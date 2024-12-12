/**
 * Component for displaying global COVID-19 statistics
 * Renders a grid of stat cards with different colors
 */
import React from 'react';
import { Row, Col } from 'antd';
import StatCard from './StatCard';
import { statsConfig } from './config';

const GlobalStats = ({ stats, loading }) => (
  <Row gutter={[16, 16]}>
    {statsConfig.map(({ key, title, icon, color }) => (
      <Col xs={24} sm={12} lg={6} key={key}>
        <StatCard
          title={title}
          value={stats?.[key]}
          icon={icon}
          color={color}
          loading={loading}
        />
      </Col>
    ))}
  </Row>
);

export default React.memo(GlobalStats);