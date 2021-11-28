import React from 'react';

import { Dropdown, Button, Menu } from 'antd';
import { useHistory } from 'react-router';
import MenuIcon from '../../assets/MenuIcon.svg';

/**
 * The main menu for the app
 */
export const MainMenu: React.FC = () => {
  const history = useHistory();

  const onMenuClick = (key: string) => {
    history.push(key);
  };

  const menu = (
    <Menu onClick={(e) => onMenuClick(e.key)}>
      <Menu.Item key="/mailMerge">Mail merge</Menu.Item>
      <Menu.Item key="/createMailingList">New Mailing List</Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow trigger={['click']}>
      <Button type="text" icon={<img src={MenuIcon} />}></Button>
    </Dropdown>
  );
};
