import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/content/clients/Clients";
import { CreateAdmin } from "./components/content/createAdmin/CreateAdmin";
import { CreateClient } from "./components/content/createClient/CreateClient";
import { Products } from "./components/content/products/Products";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Home } from "./components/content/home/Home";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/CreateClient', element: <CreateClient /> },
    { path: '/dashboard', element: <DashboardPage />, children: [
        { path: 'clients', element: <Clients /> },
        { path: 'create-client', element: <CreateClient /> },
        { path: 'create-admin', element: <CreateAdmin /> },
        { path: 'products', element: <Products /> },
        { path: 'applyCredit', element: <AplicarCredit /> },
        { path: 'home', element: <Home /> }
    ]}
];

export default routes;

