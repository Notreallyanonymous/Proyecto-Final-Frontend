import { createBrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import SpinnerLoading from '../components/loaders/SpinnerLoading';
import TextLoading from '../components/loaders/TextLoading';
import AuthLayout from '../modules/auth/layout/AuthLayout';
import AdminLayout from '../modules/admin/layout/AdminLayout';
import NotFound from '../pages/NonFound';
import authRoutes from '../modules/auth/router/router';

const routes = [
  {
    path: "/",
    element: <Suspense fallback={<SpinnerLoading />}>< AuthLayout/></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFound /></Suspense>,
    isMenu: true,
    isPrivate: true,
    children: [...authRoutes]
  },
  {
    path: "/admin",
    element: <Suspense fallback={<SpinnerLoading />}><AdminLayout /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFound /></Suspense>,
    isMenu: true,
    isPrivate: true
  }
];

const router = createBrowserRouter(routes);

export default router;
