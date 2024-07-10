import { DashboardPage } from "./pages/DashboardPage/Dashboardpage.jsx";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/clients/Clients.jsx";
import { CreateClient } from "./components/createClient/CreateClient";
import { CreateAdmin } from "./components/createAdmin/CreateAdmin";
import { Modal } from "./components/manage/Modal";
import { Products } from "./components/products/Products";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Transfer } from "./components/content/transfer/Transfer";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage />, children: [
        { path: 'clients', element: <Clients /> },
        { path: 'create-client', element: <Modal /> },
        { path: 'applyCredit', element: <AplicarCredit /> },
        { path: 'transfer', element: <Transfer /> }, 
        { path: 'create-admin', element: <CreateAdmin /> },
        { path: 'products', element: <Products /> }
    ]}
];

export default routes;