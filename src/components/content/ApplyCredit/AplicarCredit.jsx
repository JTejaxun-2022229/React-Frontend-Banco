import React, { useState } from "react";
import { Input } from "../../Input";

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

  return (
    <div className="Content__background-container">
      <div className="form-container">
        <div className="form-container__title">
          <h1>Créditos</h1>
        </div>
        <div className="form-container__form">
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
        </div>
      </div>
    </div>
  );
};
