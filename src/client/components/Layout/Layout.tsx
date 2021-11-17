import React from 'react';

import { Space } from 'antd';
import { MainMenu } from '../MainMenu/MainMenu';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Space>
        <MainMenu />
        <div>{title}</div>
      </Space>
      <div>{children}</div>
    </div>
  );
};
