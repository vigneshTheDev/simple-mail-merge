import React from 'react';
import { Meta } from '@storybook/react';

import { MailMerge } from './MailMerge';
import { GSheetSidebar } from '../../components/GSheetSidebarForStories/GSheetSidebar';

export default {
  title: 'Pages/MailMerge',
  component: MailMerge,
} as Meta;

export const MailMergePage = () => (
  <GSheetSidebar>
    <MailMerge></MailMerge>
  </GSheetSidebar>
);
