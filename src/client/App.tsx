import React from 'react';
import { Layout } from './components/Layout/Layout';
import 'antd/dist/antd.min.css';
import { Routes } from './components/Routes/Routes';
import { MemoryRouter } from 'react-router';

export const App: React.FC = () => {
  return (
    <Layout title="App">
      <MemoryRouter>
        <Routes />
      </MemoryRouter>
    </Layout>
  );
};
