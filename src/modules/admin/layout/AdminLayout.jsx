import { Outlet } from 'react-router-dom';
import AdminSideBar from '../components/AdminSideBar';

const AdminLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <AdminSideBar />

            <div style={{ padding: '50px', paddingTop: '30px', width: '100%' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
