import React from 'react';
import { Spin, Space } from 'antd';

const LoadingSpinner = () => (
  <div style={{ 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    background: '#f0f2f5'
  }}>
    <Space direction="vertical" align="center">
      <Spin size="large" />
      <span>Loading statistics...</span>
    </Space>
  </div>
);

export default LoadingSpinner;