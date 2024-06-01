import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);

        const response = await loginRequest({ email, password });

        setIsLoading(false);
        if (response.error) {
            return toast.error(
                response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
            );
        }

        const userDetails = response.data.account;

        localStorage.setItem('user', JSON.stringify(userDetails));

        const role = userDetails.role;

        if (role) {
            switch (role) {
                case "USER_ROLE":
                    console.log("You have a role: ", role);
                    navigate('/user');
                    break;
                case "ADMIN_ROLE":
                    console.log("You have a role:", role);
                    navigate('/admin');
                    break;
                default:
                    console.log("You have a role:", role, 'default');
                    navigate('/');
                    break;
            }
        } else {
            console.log("Role is undefined");
            toast.error('No se encontró el rol del usuario');
        }
    };

    return {
        login,
        isLoading
    };
};
