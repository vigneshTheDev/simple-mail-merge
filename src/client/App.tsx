import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Routes } from './components/Routes/Routes';
import { MemoryRouter } from 'react-router';

export const App: React.FC = () => {
  return (
    <MemoryRouter>
      <Routes />
    </MemoryRouter>
  );
};
