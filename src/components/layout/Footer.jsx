import React from 'react';
import { Layout, Typography } from 'antd';
import { footerStyles as styles } from './styles';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => (
  <AntFooter style={styles.footer}>
    <Text type="secondary">
      Data provided by disease.sh - Open Disease Data API
    </Text>
  </AntFooter>
);

export default Footer;