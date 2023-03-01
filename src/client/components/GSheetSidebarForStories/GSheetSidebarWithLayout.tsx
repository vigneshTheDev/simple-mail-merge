import React from 'react';
import { Layout } from '../Layout/Layout';
import { GSheetSidebar } from './GSheetSidebar';

export const GSheetSidebarWithLayout: React.FC = ({ children }) => {
  return (
    <GSheetSidebar>
      <Layout title="Mail Merge">{children}</Layout>
    </GSheetSidebar>
  );
};
