import { lazy, Suspense } from 'react';
import TextLoading from '../../../components/loaders/TextLoading';

const AdminCrud = lazy(() => import('../views/AdminCrud'));
const AdminWelcome = lazy(() => import('../views/AdminWelcome'));

const adminRoutes = [
  {
    path: "",
    element: <AdminWelcome />,
    errorElement:
      <Suspense fallback={<TextLoading />}>
        <AdminWelcome />
      </Suspense>,
    isMenu: true,
    isPrivate: true
  },
  {
    path: "products",
    element: <AdminCrud />,
    errorElement:
      <Suspense fallback={<TextLoading />}>
        <AdminCrud />
      </Suspense>,
    isMenu: true,
    isPrivate: true
  },
];


export default adminRoutes;
