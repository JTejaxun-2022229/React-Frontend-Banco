import { useEffect, useState } from "react";
import { getTransfer } from "../../services";

export const useTransferData = (emisorId) => {
    const [transfered, setTransfered] = useState([]);
    const [filteredTransfer, setFilteredTransfer] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTransfer = async () => {
            setIsLoading(true);

            try {
                const response = await getTransfer(emisorId);
                if (!response.error) {
                    setTransfered(response.data || []);
                } else {
                    console.error('Error al cargar las transferencias:', response.error);
                }
            } catch (error) {
                console.error('Error al cargar las transferencias:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTransfer();
    }, [emisorId]);

    useEffect(() => {
        if (Array.isArray(transfered?.transfers)) {
            const filtered = transfered.transfers.filter(tr => tr.emisor === emisorId);
            setFilteredTransfer(filtered);
        }
    }, [transfered, emisorId]);

    return {
        transfered,
        filteredTransfer,
        isLoading,
    };
};