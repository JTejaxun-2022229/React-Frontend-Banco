import { UserPage } from "./pages/userPage";
import { AdminPage } from "./pages/adminPage";
import { AuthPage } from "./pages/auth";
import { Credit } from "./components/credit/Credit.jsx";
import { CreateUser } from "./components/createUser/CreateUser.jsx";
import { Settings } from "./components/settings/Settings.jsx";

export const routes = [
    { path: '/', element: <AuthPage /> },
  /*{ path: '/user', element: <UserPage />, children: [
      { path: 'transaction', element: <Transaction /> },
      { path: 'credit', element: <UserCredit /> },
      { path: 'settings', element: <Settings /> }
    ]
  },*/
  { path: '/admin', element: <AdminPage />, children: [
      { path: 'creditos', element: <Credit /> },
      { path: 'usuarios', element: <CreateUser /> },
      { path: 'settings', element: <Settings /> }
    ]
  }
];

export default routes;