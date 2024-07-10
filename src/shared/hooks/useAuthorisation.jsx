import { useState } from "react";
import { postAuthentication as postAuthenticationRequest } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuthorisation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const Authentication = async (creditId, status) => {
    console.log(status)
    setIsLoading(true);
    try {
      const response = await postAuthenticationRequest({
        creditId,
        status
      });

      setIsLoading(false);
      if (response.error) {
        const errorMessage = response.e?.response?.data?.msg || 'Error al solicitar Crédito';
        throw new Error(errorMessage);
      }


      window.location.reload();
      toast.success("Operación exitosa");
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return {
    Authentication,
    isLoading
  };
};
