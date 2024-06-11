import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);

        try {
            const response = await loginRequest({ email, password });
            setIsLoading(false);

            if (response.error) {
                const errorMessage = response.e.response?.data?.msg || 'Ocurrió un error al iniciar sesión';
                throw new Error(errorMessage);
            }

            const userDetails = response.data.account;
            localStorage.setItem('user', JSON.stringify(userDetails));

            const role = userDetails.role;
            if(!role){
                throw new Error(errorMessage);
            }
            
            navigate("/dashboard");

        } catch (error) {
            setIsLoading(false);
            toast.error(error.message);
        }
    };

    return {
        login,
        isLoading
    };
};
