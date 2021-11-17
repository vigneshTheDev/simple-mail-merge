import React from 'react';

import { MenuOutlined } from '@ant-design/icons';
import { Dropdown, Button, Menu } from 'antd';
import { useHistory } from 'react-router';

export const MainMenu: React.FC = () => {
  const history = useHistory();

  const onMenuClick = (key: string) => {
    history.push(key);
  };

  const menu = (
    <Menu onClick={(e) => onMenuClick(e.key)}>
      <Menu.Item key="mailMerge">Mail merge</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <Button icon={<MenuOutlined />}></Button>
    </Dropdown>
  );
};
