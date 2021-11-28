import React, { ReactNode } from 'react';

import { Row, Col } from 'antd';
import { MainMenu } from '../MainMenu/MainMenu';

export interface LayoutProps {
  title: string;
  footer?: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children, title, footer }) => {
  return (
    <div style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <Row
        style={{
          width: '100%',
          height: 50,
          alignItems: 'center',
          backgroundColor: '#ffffff',
          color: '#555555',
          flexShrink: 0,
          flexGrow: 0,
        }}
      >
        <Col style={{ paddingLeft: 8 }}>
          <MainMenu />
        </Col>
        <Col flex="auto" style={{ textAlign: 'center', paddingRight: 40, fontSize: 16, fontWeight: 300 }}>
          <div>{title}</div>
        </Col>
      </Row>
      <div style={{ padding: 16, flexShrink: 1, flexGrow: 1, overflow: 'auto' }}>{children}</div>
      {!!footer && <div style={{ flexShrink: 0, flexGrow: 0, backgroundColor: 'white', padding: 16 }}>{footer}</div>}
    </div>
  );
};
