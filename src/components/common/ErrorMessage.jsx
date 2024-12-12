import React from 'react';
import { Result, Button } from 'antd';

const ErrorMessage = ({ message, onRetry }) => (
  <Result
    status="error"
    title="Error Loading Data"
    subTitle={message}
    extra={[
      <Button type="primary" key="retry" onClick={onRetry}>
        Try Again
      </Button>
    ]}
  />
);

export default ErrorMessage;