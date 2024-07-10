import { useState } from "react";
import { postAuthentication as postAuthenticationRequest } from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const useAuthorisation = () => {
  const [isLoading, setIsLoading] = useState(false);

  const Authentication = async (creditId, status) => {

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

/**  try {
    const Transfer = async (
      emisorAccount,
      amount,
      receptorAccount,
      description
    ) => {
      setIsLoading(true);

      const response = await postTransferRequest({
        emisorAccount,
        amount,
        receptorAccount,
        description,
      });

      setIsLoading(false);
      if (response.error) {
        return toast.error(
          response.e?.response?.data || "Error creating transfer"
        );
      }

      toast.success("Transfer created successfully");
    };
  } catch (error) {
    toast.error("Error al enviar");
  }; */