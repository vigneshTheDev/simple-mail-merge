import { Meta } from '@storybook/react';
import React from 'react';
import { GSheetSidebarWithLayout } from '../GSheetSidebarForStories/GSheetSidebarWithLayout';
import { Card } from './Card';

export default {
  title: 'Components/Card',
  component: Card,
} as Meta;

export const CardComponent = () => (
  <GSheetSidebarWithLayout>
    <Card>This is a card</Card>
  </GSheetSidebarWithLayout>
);
