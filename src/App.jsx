/**
 * Main application component that orchestrates the layout and data flow
 */
import React from 'react';
import { Layout, Typography, Space } from 'antd';
import Header from './components/layout/Header';
import GlobalStats from './components/stats/GlobalStats';
import CountryChart from './components/charts/CountryChart';
import ErrorMessage from './components/common/ErrorMessage';
import Footer from './components/layout/Footer';
import { useStats } from './hooks/useStats';

const { Content } = Layout;
const { Title } = Typography;

function App() {
  const { globalStats, countryStats, loading, error, refetch } = useStats();

  if (error) {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <ErrorMessage message={error} onRetry={refetch} />
      </Layout>
    );
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Content style={{ padding: '24px', background: '#f0f2f5' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={4}>Global Overview</Title>
            <GlobalStats stats={globalStats} loading={loading} />
            <CountryChart countryData={countryStats} loading={loading} />
          </Space>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;