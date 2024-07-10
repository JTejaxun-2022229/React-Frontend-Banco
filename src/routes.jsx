import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";
import { Clients } from "./components/content/clients/Clients";
import { CreateAdmin } from "./components/content/createAdmin/CreateAdmin";
import { Modal } from "./components/manage/Modal";
import { Benefits } from "./components/content/benefits/Benefits";
import { BenefitUser } from "./components/content/benefits/BenefitUser"
import { Purchase } from "./components/content/purchase/Purchase";
import { CreateBenefit } from "./components/content/benefits/CreateBenefit";
import { AplicarCredit } from "./components/content/ApplyCredit/AplicarCredit";
import { Home } from "./components/content/home/Home";

const routes = [
    { path: '/', element: <AuthPage /> },
    {
        path: '/dashboard', element: <DashboardPage />, children: [
            { path: 'clients', element: <Clients /> },
            { path: 'create-client', element: <Modal /> },
            { path: 'create-admin', element: <CreateAdmin /> },
            { path: 'benefits', element: <Benefits /> },
            { path: 'Store', element: <BenefitUser /> },
            { path: 'purchases', element: <Purchase /> },
            { path: 'create-benefit', element: <CreateBenefit /> },
            { path: 'applyCredit', element: <AplicarCredit /> },
            { path: 'home', element: <Home /> }
        ]
    }
];

export default routes;