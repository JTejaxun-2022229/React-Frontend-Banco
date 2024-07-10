import React, { useState } from "react";
import { Input } from "../../Input";
<<<<<<< HEAD

import "./aplicarCredit.css";

export const AplicarCredit = () => {
  const [formData, setFormData] = useState({
    dpi: "",
    amount: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    dpi: "",
    amount: "",
    description: "",
  });

  const handleChange = (value, field) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleBlur = (value, field) => {
    let errorMessage = "";
    if (value === "") {
      errorMessage = `${field} is required`;
    } else if (field === "amount" && isNaN(value)) {
      errorMessage = "Amount must be a number";
    }
    setErrors({
      ...errors,
      [field]: errorMessage,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };

=======
import { useUserDetails } from "../../../shared/hooks";
import { useApplyCredit } from "../../../shared/hooks/useApplyCredit";

import {
  amountValidationMesage,
  validateAmount,
} from "../../../shared/validators/validateAmount";
import "./aplicarCredit.css";

export const AplicarCredit = () => {
  const { username, account } = useUserDetails();
  const { credit, isLoading } = useApplyCredit();

  const [formData, setFormData] = useState({
    userAccount: {
      value: account,
      isValid: true,
      showError: false
    },
    
    amount: {
      value: "",
      isValid: false,
      showError: false,
    },
    description: {
      value: "",
      isValid: true,
      showError: false
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
        isValid = validateAmount(value);
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

  const handleCredit = (event) => {
    event.preventDefault();

    credit(formData.userAccount.value,formData.amount.value,formData.description.value);
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formData.amount.isValid;

>>>>>>> develop
  return (
    <div className="Content__background-container">
      <div className="form-container">
        <div className="form-container__title">
          <h1>Créditos</h1>
        </div>
        <div className="form-container__form">
<<<<<<< HEAD
          <form onSubmit={handleSubmit}>
            <Input
              field="dpi"
              label="DPI"
              value={formData.dpi}
              onChangeHandler={handleChange}
              onBlurHandler={handleBlur}
              type="text"
              showErrorMessage={errors.dpi}
              validationMessage={errors.dpi}
            />
            <Input
              field="amount"
              label="Monto"
              value={formData.amount}
              onChangeHandler={handleChange}
              onBlurHandler={handleBlur}
              type="number"
              showErrorMessage={errors.amount}
              validationMessage={errors.amount}
            />
            <Input
              field="description"
              label="Descripción"
              value={formData.description}
              onChangeHandler={handleChange}
              onBlurHandler={handleBlur}
              textarea
              showErrorMessage={errors.description}
              validationMessage={errors.description}
            />
            <button type="submit">Enviar</button>
          </form>
=======
          <Input
            field="cuenta"
            label={`Cuenta- ${username}`}
            value={formData.userAccount.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type="text"
            disabled={true}
          />
          <Input
            field="amount"
            label="Monto :"
            value={formData.amount.value}
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            type="number"
            showErrorMessage={formData.amount.showError}
            validationMessage={amountValidationMesage}
          />
          <Input
            field="description"
            label="Descripción :"
            onChangeHandler={handleInputValueChange}
            onBlurHandler={handleInputValidationOnBlur}
            value={formData.description.value}
            textarea
          />
          <button onClick={handleCredit} disabled={isSubmitButtonDisabled}>
            Enviar
          </button>
>>>>>>> develop
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> develop
