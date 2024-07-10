import { useState } from "react";
import { postTransfer as postTransferRequest } from "../../services/api.jsx";
import toast from "react-hot-toast";
 
export const useApplyTransfer = () => {
  const [isLoading, setIsLoading] = useState(false);
 
  const transfer = async() =>{
    setIsLoading(true);
    try {
        const response = await postTransferRequest({
            emisorAccount,
            amount,
            receptorAccount,
            description,
        });
 
        console.log(response.date.emisorAccount);

        setIsLoading(false);
        if (response.error) {
            const errorMessage = response.e?.response?.data?.msg || 'Error al solicitar Crédito';
            throw new Error(errorMessage);
          }
 
      toast.success("Transfer created successfully");
    } catch (error) {
        setIsLoading(false);
        toast.error(error.message);
    }
  }
 
  return {
    transfer,
    isLoading,
  };
};