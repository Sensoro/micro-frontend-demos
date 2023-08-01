import React from 'react';
import { useRoutes, Navigate, type NonIndexRouteObject } from 'react-router-dom';
import { MicroApp } from '@pansy/qiankun-react-shared';
import { BasicLayout } from '@/layouts/BasicLayout';
import { Lazy } from '@/components/Lazy';
import Login from '@/pages/login';

export const routes: NonIndexRouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/dashboard" />,
  },
  {
    element: <BasicLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Lazy entry={() => import('@/pages/dashboard')} />,
      },
      {
        path: 'child-react/*',
        element: <MicroApp name="child-react" />,
      }
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
