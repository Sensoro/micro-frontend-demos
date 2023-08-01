import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { APP_NAME } from '@/config';
import { Router } from '@/routers';

const App: React.FC = () => {
  return (
    <BrowserRouter basename={APP_NAME}>
      <Router />
    </BrowserRouter>
  )
}

export default App
