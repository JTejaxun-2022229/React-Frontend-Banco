import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/content/clients/Clients";
import { CreateAdmin } from "./components/content/createAdmin/CreateAdmin";
<<<<<<< HEAD
import { Modal } from "./components/manage/Modal";
import { Products } from "./components/content/products/Products";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Home } from "./components/content/home/Home";
=======
import { CreateClient } from "./components/content/createClient/CreateClient";
import { Favorite } from "./components/content/favorite/Favorite";
import { Benefits } from "./components/content/benefits/Benefits";
import { Purchase } from "./components/content/purchase/Purchase";
import { CreateBenefit } from "./components/content/benefits/CreateBenefit";
import { Products } from "./components/content/products/Products";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Home } from "./components/content/home/Home";
import {Conversor} from './pages/converter';
import {CreditContainer} from "./components/content/AceptCredit/CreditContainer";
import { AceptCredit } from "./components/content/AceptCredit/AceptCredit";
import { AceptCreditAcep } from "./components/content/AceptCredit/AceptCreditAcep";
import { AceptCreditDen } from "./components/content/AceptCredit/AceptCreditDen";
>>>>>>> develop

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/convertion', element: <Conversor />},
    { path: '/dashboard', element: <DashboardPage />, children: [
        { path: 'clients', element: <Clients /> },
        { path: 'create-client', element: <CreateClient /> },
        { path: 'create-admin', element: <CreateAdmin /> },
        { path: 'products', element: <Products /> },
<<<<<<< HEAD
        { path: 'applyCredit', element: <AplicarCredit/> },
        { path: 'home', element: <Home/>}
    ]}
];

export default routes;
=======
        { path: 'applyCredit', element: <AplicarCredit /> },
        { path: 'home', element: <Home /> },
        { path: 'favorite', element: <Favorite /> },
        { path: 'benefits', element: <Benefits /> },
        { path: 'applyCredit', element: <AplicarCredit/> },
        { path: 'create-benefit', element: <CreateBenefit /> },
        { path: 'purchases', element: <Purchase /> },
        { path: '/dashboard/content', element: <CreditContainer/>, children: [
            { path: 'accept-credit', element: <AceptCredit/>},
            { path: 'accepted-history', element: <AceptCreditAcep/>},
            { path: 'denied-history', element: <AceptCreditDen/>}
        ]}
    ]}
];

export default routes;

>>>>>>> develop
