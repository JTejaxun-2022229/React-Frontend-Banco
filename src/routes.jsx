import { AdminPage } from "./pages/DashboardPage";
import { AuthPage } from "./pages/auth";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <AdminPage /> }, 
];

export default routes;