import { useState } from "react";
import { postTransfer as postTransferRequest } from "../../services/api.jsx";
import toast from "react-hot-toast";

export const useApplyTransfer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const transfer = async (emisorAccount, amount, receptorAccount, description) => {
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

  return {
    transfer,
    isLoading,
  };
};