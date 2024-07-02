// routes.jsx
import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/clients/Clients";
import { CreateClient } from "./components/createClient/CreateClient";
import { CreateAdmin } from "./components/createAdmin/CreateAdmin";
import { Modal } from "./components/manage/Modal";
import { Products } from "./components/products/Products";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage />, children: [
        { path: 'clients', element: <Clients /> },
        { path: 'create-client', element: <Modal /> },
        { path: 'create-admin', element: <CreateAdmin /> },
        { path: 'products', element: <Products /> }
    ]}
];

export default routes;
