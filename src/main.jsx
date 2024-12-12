import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider, theme } from 'antd';
import App from './App';
import { TimeProvider } from './contexts/TimeContext';
import { antThemeConfig } from './config/theme';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        algorithm: theme[antThemeConfig.algorithm],
        token: antThemeConfig.token,
      }}
    >
      <TimeProvider>
        <App />
      </TimeProvider>
    </ConfigProvider>
  </React.StrictMode>,
);