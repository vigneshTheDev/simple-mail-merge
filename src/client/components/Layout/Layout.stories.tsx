import React from 'react';
import { Meta, Story } from '@storybook/react';

import { Layout, LayoutProps } from './Layout';
import { GSheetSidebar } from '../GSheetSidebarForStories/GSheetSidebar';
import { Button } from 'antd';

export default {
  title: 'Components/Layout',
  component: Layout,
} as Meta;

const Template: Story<LayoutProps> = (args) => (
  <GSheetSidebar>
    <Layout {...args}>
      <div>Content</div>
    </Layout>
  </GSheetSidebar>
);

export const LayoutComponent = Template.bind({});

LayoutComponent.args = {
  title: 'Mail Merge',
};

export const LayoutWithFooter = Template.bind({});
LayoutWithFooter.args = {
  title: 'Mail Merge',
  footer: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Button block type="primary">
        Footer Action 1
      </Button>
      <Button block type="ghost">
        Footer Action 2
      </Button>
    </div>
  ),
};
