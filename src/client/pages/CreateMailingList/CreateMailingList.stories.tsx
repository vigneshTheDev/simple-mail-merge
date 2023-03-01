import { Meta } from '@storybook/react';
import React from 'react';
import { GSheetSidebar } from '../../components/GSheetSidebarForStories/GSheetSidebar';
import { CreateMailingList } from './CreateMailingList';

export default {
  title: 'Pages/CreateMailingList',
  component: CreateMailingList,
} as Meta;

export const CreateMailingListPage = () => (
  <GSheetSidebar>
    <CreateMailingList />
  </GSheetSidebar>
);
