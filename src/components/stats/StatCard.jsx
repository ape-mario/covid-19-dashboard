/**
 * StatCard Component
 * Displays statistical information in a card format with customizable colors and icons
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the statistic
 * @param {number} props.value - The numerical value to display
 * @param {Component} props.icon - Ant Design icon component
 * @param {Object} props.color - Color configuration object
 * @param {boolean} props.loading - Loading state of the card
 */
import React from 'react';
import { Card, Statistic } from 'antd';
import { formatNumber } from '../../utils/formatters';
import { cardStyles } from './styles';

const StatCard = ({ title, value, icon: Icon, color, loading = false }) => (
  <Card 
    bordered={false} 
    loading={loading}
    styles={{
      body: cardStyles.cardBody,
    }}
    style={cardStyles.getCardStyle(color)}
  >
    <Statistic
      title={
        <span style={cardStyles.getStatTitleStyle(color)}>
          {title}
        </span>
      }
      value={value}
      prefix={
        <Icon style={cardStyles.getIconStyle(color)} />
      }
      valueStyle={cardStyles.getValueStyle(color)}
      formatter={formatNumber}
    />
  </Card>
);

export default React.memo(StatCard);