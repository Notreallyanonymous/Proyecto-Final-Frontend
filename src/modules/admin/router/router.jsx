import { lazy, Suspense } from 'react';
import TextLoading from '../../../components/loaders/TextLoading';

const Root = lazy(() => import('../views/root'));
const LoginPage = lazy(() => import('../views/login'));
const RegisterPage = lazy(() => import('../views/register'));
const ResetPasswordPage = lazy(() => import('../views/resetPassword'));
const DashboardPage = lazy(() => import('../views/dashboard'));
const AdminCrud = lazy(() => import('../views/adminCrud'));
const NotFoundPage = lazy(() => import('../../../pages/NonFound'));

const adminRoutes = [
  {
    path: "/",
    element: <Suspense fallback={<TextLoading />}><Root /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "/login",
    element: <Suspense fallback={<TextLoading />}><LoginPage /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "/register",
    element: <Suspense fallback={<TextLoading />}><RegisterPage /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "/resetPassword",
    element: <Suspense fallback={<TextLoading />}><ResetPasswordPage /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "/dashboard",
    element: <Suspense fallback={<TextLoading />}><DashboardPage /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "/admin",
    element: <Suspense fallback={<TextLoading />}><AdminCrud /></Suspense>,
    errorElement: <Suspense fallback={<TextLoading />}><NotFoundPage /></Suspense>,
    isMenu: true,
    isPrivate: true
  }
];

export default adminRoutes;
