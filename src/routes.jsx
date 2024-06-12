import { UserPage } from "./pages/userPage";
import { AdminPage } from "./pages/adminPage";
import { AuthPage } from "./pages/auth";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/user', element: <AdminPage /> },   
    { path: '/admin', element: <AdminPage /> }, 
];

export default routes;