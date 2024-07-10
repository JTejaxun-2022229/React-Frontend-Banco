// routes.jsx
import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/content/clients/Clients";
import { CreateAdmin } from "./components/content/createAdmin/CreateAdmin";
import { Modal } from "./components/manage/Modal";
import { Products } from "./components/content/products/Products";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Home } from "./components/content/home/Home";
import {CreditContainer} from "./components/content/AceptCredit/CreditContainer";
import { AceptCredit } from "./components/content/AceptCredit/AceptCredit";
import { AceptCreditAcep } from "./components/content/AceptCredit/AceptCreditAcep";
import { AceptCreditDen } from "./components/content/AceptCredit/AceptCreditDen";


const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage />, children: [
        { path: 'clients', element: <Clients /> },
        { path: 'create-client', element: <Modal /> },
        { path: 'create-admin', element: <CreateAdmin /> },
        { path: 'products', element: <Products /> },
        { path: 'applyCredit', element: <AplicarCredit/> },
        { path: 'home', element: <Home/>},
        { path: '/dashboard/content', element: <CreditContainer/>, children: [
            { path: 'accept-credit', element: <AceptCredit/>},
            { path: 'accepted-history', element: <AceptCreditAcep/>},
            { path: 'denied-history', element: <AceptCreditDen/>}
        ]}
    ]},
];

export default routes;
