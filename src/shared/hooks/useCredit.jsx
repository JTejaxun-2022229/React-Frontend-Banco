import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { getCredit as getCreditsRequest } from "../../services/api";  // Asegúrate de que esta ruta sea correcta

export const useCredit = () => {
  const [credits, setCredits] = useState([]);

  const getCredit = async () => {
    try {
      const creditData = await getCreditsRequest();
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
    getCredit();
  }, []);

  return {
    getCredit,
    isFetching: !Boolean(credits.length),
    credits,
  };
};
