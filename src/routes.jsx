import { DashboardPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage /> }, 
];

export default routes;