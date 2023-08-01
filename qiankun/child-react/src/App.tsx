import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from '@/routers';

const App: React.FC = () => {
  return (
    <BrowserRouter basename="child-react">
      <Router />
    </BrowserRouter>
  )
}

export default App
