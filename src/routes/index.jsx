
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const Home = lazy(() => import('../views/Home'));
const Data = lazy(() => import('../views/Data'));
const Map = lazy(() => import('../views/Map'));
const Full = lazy(() => import('../views/Full'));

const routes = [
  { path: '/home', element: <Home /> },
  {
    path: '/data',
    element: <Data />,
  },
  { path: '/map', element: <Map /> },
  { path: '/full', element: <Full /> },
  { path: '/', element: <Navigate to="/home" /> },
];

export default routes;
