import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCreditAccepted as getCreditAcceptedRequest } from "../../services/api";  // Asegúrate de que esta ruta sea correcta

export const useCreditHistoryAcept = () => {
  const [credits, setCredits] = useState([]);

  const getCreditAce = async () => {
    try {
      const creditData = await getCreditAcceptedRequest();
      if (creditData.error) {
        return toast.error(
          creditData.error.response?.data || 'No se pudo encontrar los créditos'
        );
      }
      setCredits(creditData.data.credits);
    } catch (error) {
      toast.error('Error al obtener los créditos');
    }
  };

  useEffect(() => {
    getCreditAce();
  }, []);

  return {
    getCreditAce,
    isFetching: !Boolean(credits.length),
    credits,
  };
};
