import { UserPage } from "./pages/userPage";
import { AdminPage } from "./pages/adminPage";
import { AuthPage } from "./pages/auth";
import {Conversor} from './pages/converter'

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/user', element: <AdminPage /> },   
    { path: '/admin', element: <AdminPage /> }, 
    { path: '/convertion', element: <Conversor />}
];

export default routes;