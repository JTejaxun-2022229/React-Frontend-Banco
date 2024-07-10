export const validateAmount = (amount) => {
    const minimumAmount = 2000.00;

    return amount >= minimumAmount;
}

export const amountValidationMesage = 'No puedes solicitar menos de 2000.00Q'