import { UserPage } from "./pages/userPage";
import { AdminPage } from "./pages/adminPage";
import { TransferPage } from "./pages/transfer";
import { AuthPage } from "./pages/auth";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/user', element: <UserPage /> },
    { path: '/admin', element: <AdminPage /> }, 
    { path: '/transfer', element: <TransferPage /> }
];

export default routes;