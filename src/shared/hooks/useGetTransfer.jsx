import { useEffect, useState } from "react";
import { getTransfer } from "../../services";
import { faL } from "@fortawesome/free-solid-svg-icons";

const useTransferData = (emisorId) => {
    const [transfered, setTransfered] = useState({trans:[]});
    const [filteredTransfer, setFilteredTransfer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        const fetchTransfer = async () => {
            setIsLoading(true);

            try{
                const response = await getTransfer();

                if(!response.error){
                    setTransfered(response.data || { trans: []});
                    setIsLoading(false)
                } else {
                    console.error('Error, no se han podido cargar las transferencias:', error);
                    setIsLoading(false);
                }

            }catch(error){
                console.error('Error al cargar las transferencias de este usuario:', error);
                setIsLoading(false)
            }
        };

        fetchTransfer();
    }, []);

    useEffect(() => {
        if (Array.isArray(transfered.trans)) {
            const filtered = transfered.trans.filter(tr => tr.emisor === emisorId);
            setFilteredTransfer(filtered);
        }
    }, [transfered, emisorId]);

    return {
        transfered,
        filteredTransfer,
        isLoading,
    };
}