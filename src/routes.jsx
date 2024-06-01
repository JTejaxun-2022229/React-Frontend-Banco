import React from 'react';
import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";

const routes = [
    { path: '/', element: <AuthPage /> },
    { path: '/dashboard', element: <DashboardPage /> }, 
];

export default routes;