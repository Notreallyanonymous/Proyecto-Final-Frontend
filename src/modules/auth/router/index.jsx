import { lazy, Suspense } from 'react';
import TextLoading from '../../../components/loaders/TextLoading';

const LoginPage = lazy(() => import('../views/login'));
const RegisterPage = lazy(() => import('../views/register'));
const ResetPasswordPage = lazy(() => import('../views/resetPassword'));
const DashboardPage = lazy(() => import('../views/dashboard'));
const NotFoundPage = lazy(() => import('../../../pages/NonFound'));

const authRoutes = [
  {
    path: "login",
    element: (
      <Suspense fallback={<TextLoading />}>
        <LoginPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<TextLoading />}>
        <NotFoundPage />
      </Suspense>
    ),
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<TextLoading />}>
        <RegisterPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<TextLoading />}>
        <NotFoundPage />
      </Suspense>
    ),
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "resetPassword",
    element: (
      <Suspense fallback={<TextLoading />}>
        <ResetPasswordPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<TextLoading />}>
        <NotFoundPage />
      </Suspense>
    ),
    isMenu: true,
    isPrivate: true,
  },
  {
    path: "dashboard",
    element: (
      <Suspense fallback={<TextLoading />}>
        <DashboardPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<TextLoading />}>
        <NotFoundPage />
      </Suspense>
    ),
    isMenu: true,
    isPrivate: true,
  }
];

export default authRoutes;
