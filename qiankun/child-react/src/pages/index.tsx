import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => { navigate('/dashboard') }}>切换到概览页</Button>
      Index Page 123
    </div>
  )
}

export default Home;
