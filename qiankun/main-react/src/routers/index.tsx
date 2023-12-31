import React from 'react';
import { useRoutes, Navigate, type NonIndexRouteObject } from 'react-router-dom';
import { MicroApp } from '@pansy/qiankun-react-shared';
import { BasicLayout } from '@/layouts/BasicLayout';
import { Lazy } from '@/components/Lazy';
import Login from '@/pages/login';

export const routes: NonIndexRouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />,
  },
  {
    element: <BasicLayout />,
    children: [
      {
        path: 'home',
        element: <Lazy entry={() => import('@/pages/home')} />,
      },
      {
        path: 'child-react/*',
        element: <MicroApp name="child-react" />,
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
];

export const Router: React.FC = () => {
  return <>{useRoutes(routes)}</>;
};
