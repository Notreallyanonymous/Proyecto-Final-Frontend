import { RouterProvider } from 'react-router-dom';
import authRoutes from '../router/router';

const AdminLayout = () => {
    return (
        <>
        <RouterProvider router={authRoutes} />
        </>
    );
}
 
export default AdminLayout;