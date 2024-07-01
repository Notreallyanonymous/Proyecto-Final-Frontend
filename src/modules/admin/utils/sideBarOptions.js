import { HiChartPie, HiShoppingBag, HiShoppingCart, HiLogout, HiUser } from "react-icons/hi";
import dashboardImg from "../assets/dashboard.jpg";
import nftImg from "../assets/nfts.jpg";
import storeImg from "../assets/store.jpg";
import userImg from "../assets/user.jpg";
import logoutImg from "../assets/logout.jpg";

export const sidebarOptions = [
    {
        name: 'Dashboard',
        image: dashboardImg,
        description: 'Visión general de las métricas y actividades.',
        route: '/admin/dashboard',
        icon: HiChartPie
    },
    {
        name: 'Productos',
        image: nftImg,
        description: 'Administrar y actualizar los productos disponibles.',
        route: '/admin/products',
        icon: HiShoppingBag
    },
    {
        name: 'Ventas',
        image: storeImg,
        description: 'Revisar y gestionar las ventas realizadas.',
        route: '/admin/sales',
        icon: HiShoppingCart
    },
    {
        name: 'Perfil',
        image: userImg,
        description: 'Editar y actualizar la información del perfil.',
        route: '/admin/profile',
        icon: HiUser
    },
    {
        name: 'Cerrar Sesión',
        image: logoutImg,
        description: 'Salir de la cuenta de administración.',
        route: '/logout',
        icon: HiLogout
    }
];