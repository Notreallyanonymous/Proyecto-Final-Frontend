import { RouterProvider } from 'react-router-dom';
import AdminMenu from '../components/AdminMenu'
import adminRoutes from '../router/router';

const AdminLayout = () => {
    return (
        <>
        <AdminMenu/>
        <RouterProvider router={adminRoutes} />
        </>
    );
}
 
export default AdminLayout;