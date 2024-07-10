import { useState } from "react"
import { postCredit as postCreditRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useApplyCredit = () => {
    const [isLoading, setIsLoading] = useState(false)

    const credit = async( userAccount,amount, description) =>{
        setIsLoading(true)

        const response = await postCreditRequest({
            userAccount,
            amount,
            description
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'Error al solicitar Credito'
            )
        }

    }
    return {
        credit,
        isLoading
    }
}