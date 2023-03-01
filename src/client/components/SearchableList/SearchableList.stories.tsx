import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Card } from '../Card/Card';
import { GSheetSidebarWithLayout } from '../GSheetSidebarForStories/GSheetSidebarWithLayout';
import { SearchableList, SearchableListProps } from './SearchableList';

export default {
  title: 'Components/SearchableList',
  component: SearchableList,
} as Meta<SearchableListProps>;

const Template: Story<SearchableListProps> = (args) => (
  <GSheetSidebarWithLayout>
    <Card>
      <SearchableList {...args}></SearchableList>
    </Card>
  </GSheetSidebarWithLayout>
);

export const SearchableListComponent = Template.bind({});
SearchableListComponent.args = {
  items: [
    {
      key: 'cup-cake',
      label: 'Cup Cake Customers',
    },
    {
      key: 'sugar-candy-pro',
      label: 'Sugar Candy Pro Users',
    },
    {
      key: 'sugar-candy-free',
      label: 'Sugar Candy Free Users',
    },
    {
      key: 'sunday-chef-viewers',
      label: 'Sunday Chef Viewers',
    },
    {
      key: 'fitness-club-members',
      label: 'Fitness Club Members',
    },
    {
      key: 'design-newsletter',
      label: 'Design Newsletter',
    },
    {
      key: 'yoga-class',
      label: 'Yoga Class Wait list',
    },
  ],
};
