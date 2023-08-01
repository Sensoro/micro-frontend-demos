import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QiankunConfig } from '@pansy/qiankun-react-shared';
import { Router } from '@/routers';

const apps = [
  {
    name: 'child-react',
    entry: '//localhost:9501',
  },
];

const App: React.FC = () => {
  return (
    <QiankunConfig apps={apps}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QiankunConfig>
  );
};

export default App;
