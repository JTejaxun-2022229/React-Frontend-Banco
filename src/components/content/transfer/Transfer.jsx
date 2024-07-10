import React, { useState } from "react";
import { Input } from "../../Input";
import { useUserDetails } from "../../../shared/hooks";
import { useApplyTransfer } from "../../../shared/hooks/useApplyTransfer";
import "./transfer.css";



export const Transfer = () => {
  const { username, account } = useUserDetails();
  const { transfer, isLoading } = useApplyTransfer();
  const [formData, setFormData] = useState({
    emisorAccount: {
      value: account,
      isValid: true,
      showError: false,
    },
    amount: {
      value: "",
      isValid: false,
      showError: false,
    },
    receptorAccount: {
      value: "",
      isValid: true,
      showError: false,
    },
    description: {
      value: "",
      isValid: true,
      showError: false,
    },
  });

  const handleInputValueChange = (value, field) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value,
      },
    }));
  };

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false;
    switch (field) {
      case "amount":
        isValid = value > 0;
        break;
      default:
        break;
    }

    setFormData((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid,
      },
    }));
  };

  const handleTransfer = (event) => {
    event.preventDefault();

    transfer(
      formData.emisorAccount.value,
      formData.amount.value,
      formData.receptorAccount.value,
      formData.description.value
    );
  };

  const isSubmitButtonDisabled =
    isLoading || !formData.amount.isValid;

  return (
    <div className="Content__background-container">
      <div className="form-container">
        <div className="form-container__title">
          <h1>Transaction</h1>
        </div>
        <div className="form-container__form">
          <Input
            field="emisorAccount"
            label={`Number account - ${username}`}
            value={formData.emisorAccount.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type="text"
            disabled={true}
          />
          <Input
            field="amount"
            label="Amount:"
            value={formData.amount.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type="number"
            showErrorMessage={formData.amount.showError}
            validationMessage="The amount must be greater than 0"
          />
          <Input
            field="receptorAccount"
            label="Receptor:"
            value={formData.receptorAccount.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type="text"
          />
          <Input
            field="description"
            label="Description:"
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            value={formData.description.value}
            textarea
          />
          <button onClick={handleTransfer} disabled={isSubmitButtonDisabled}>
            Solicitar
          </button>
        </div>
      </div>
    </div>
  );
};

