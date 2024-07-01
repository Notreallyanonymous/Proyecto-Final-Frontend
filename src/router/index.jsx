import { createBrowserRouter } from 'react-router-dom';
import {  Suspense } from 'react';

import SpinnerLoading from '../components/loaders/SpinnerLoading';
import TextLoading from '../components/loaders/TextLoading';
import NotFound from '../pages/NonFound';
// Auth
import AuthLayout from '../modules/auth/layout/AuthLayout';
import authRoutes from '../modules/auth/router';
// Admin
import AdminLayout from '../modules/admin/layout/AdminLayout';
import adminRoutes from '../modules/admin/router';

const routes = [
  {
    path: "/",
    element: <Suspense fallback={<SpinnerLoading />}><AuthLayout /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFound /></Suspense>,
    children: authRoutes
  },
  {
    path: "/admin",
    element: <Suspense fallback={<SpinnerLoading />}><AdminLayout /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFound /></Suspense>,
    children: adminRoutes 
  }
];

const router = createBrowserRouter(routes);

export default router;
