import { Badge, Sidebar } from "flowbite-react";
import { useState } from "react";
import { HiChartPie, HiShoppingBag, HiHome, HiShoppingCart, HiLogout, HiUser } from "react-icons/hi";
import nftLogo from "../../../assets/nftlogo.png";

function AdminSideBar() {
    const [showCTA, setShowCTA] = useState(true);

    const handleCloseCTA = () => {
        setShowCTA(false);
    };

    return (
        <Sidebar aria-label="Default sidebar example">
            <Sidebar.Logo href="#" img={nftLogo} imgAlt="Flowbite logo">
                NFTStore
            </Sidebar.Logo>
            <Sidebar.ItemGroup>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin/welcome" icon={HiHome}>
                            Inicio
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                            Dashboard
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/products" icon={HiShoppingBag}>
                            Productos
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/sales" icon={HiShoppingCart}>
                            Ventas
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item href="/admin/profile" icon={HiUser}>
                            Perfil
                        </Sidebar.Item>
                        <Sidebar.Item href="/admin/logout" icon={HiLogout}>
                            Cerrar Sesión
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar.ItemGroup>
            {showCTA && (
                <Sidebar.CTA>
                    <div className="mb-3 flex items-center">
                        <Badge color="warning">Bienvenido</Badge>
                        <button
                            onClick={handleCloseCTA}
                            aria-label="Close"
                            className="-m-1.5 ml-auto inline-flex h-6 w-6 rounded-lg bg-gray-100 p-1 text-cyan-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600"
                            type="button"
                        >
                            <svg
                                aria-hidden
                                className="h-4 w-4"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 1 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mb-3 text-sm text-cyan-900 dark:text-gray-400">
                        Este es tu dashboard de administración, selecciona la opción que deseas usar, y agregar, modifica o elimina los elementos que quieras cambiar de tu tienda. También puedes ver información de tus ventas y tus datos personales.
                    </div>
                </Sidebar.CTA>
            )}
        </Sidebar>
    );
}

export default AdminSideBar;
