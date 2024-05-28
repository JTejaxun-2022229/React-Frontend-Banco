import React from 'react';
import { DashboardPage } from "./pages/dashboard";
import { AuthPage } from "./pages/auth";
import { AdminHotelPage } from './pages/adminHotelPage';

const routes = [
    { path: '/auth', element: <AuthPage /> },
    { path: '/admin', element: <AdminHotelPage /> },
    { path: '/dashboard', element: <DashboardPage /> }, 
];

export default routes;