import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCreditDenied as getCreditDeniedRequest } from "../../services/api";  // Asegúrate de que esta ruta sea correcta

export const useCreditHistoryDen = () => {
  const [credits, setCredits] = useState([]);

  const  getCreditDen = async () => {
    try {
      const creditData = await getCreditDeniedRequest();
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
    getCreditDen();
  }, []);

  return {
    getCreditDen,
    isFetching: !Boolean(credits.length),
    credits,
  };
};
