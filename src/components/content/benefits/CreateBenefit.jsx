import React, { useState } from "react";
import axios from "axios";
import "./benefit.css";

export const CreateBenefit = () => {
    
    const [formData, setFormData] = useState({
        nameBenefit: "",
        descriptionBenefit: "",
        stock: "",
        price: "",
        image: "",
        status: true,
    });

    const [errors, setErrors] = useState({
        nameBenefit: "",
        descriptionBenefit: "",
        stock: "",
        price: "",
        image: "",
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
        } else if (field === "stock" && isNaN(value)) {
            errorMessage = "Stock must be a number";
        } else if (field === "price" && isNaN(value)) {
            errorMessage = "Price must be a number";
        }
        setErrors({
            ...errors,
            [field]: errorMessage,
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        for (const field in formData) {
            if (formData[field] === "" && field !== "image") {
                newErrors[field] = `${field} is required`;
                valid = false;
            }
        }
        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post(
                    "http://127.0.0.1:4000/quetzalito/v1/benefit/create",
                    formData
                );
                console.log("Response from server:", response.data);

                setFormData({
                    nameBenefit: "",
                    descriptionBenefit: "",
                    stock: "",
                    price: "",
                    image: "",
                    status: true,
                });
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        }
    };

    return (
        <div className="Content__background-container">
            <div className="form-container">
                <div className="form-container__title">
                    <h1>Benefit Form</h1>
                </div>
                <div className="form-container__form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="nameBenefit">Benefit Name</label>
                            <input
                                id="nameBenefit"
                                type="text"
                                value={formData.nameBenefit}
                                onChange={(e) => handleChange(e.target.value, "nameBenefit")}
                                onBlur={(e) => handleBlur(e.target.value, "nameBenefit")}
                            />
                            {errors.nameBenefit && (
                                <div className="showErrorMessage">{errors.nameBenefit}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="descriptionBenefit">Description</label>
                            <textarea
                                id="descriptionBenefit"
                                value={formData.descriptionBenefit}
                                onChange={(e) => handleChange(e.target.value, "descriptionBenefit")}
                                onBlur={(e) => handleBlur(e.target.value, "descriptionBenefit")}
                            />
                            {errors.descriptionBenefit && (
                                <div className="showErrorMessage">{errors.descriptionBenefit}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="stock">Stock</label>
                            <input
                                id="stock"
                                type="number"
                                value={formData.stock}
                                onChange={(e) => handleChange(e.target.value, "stock")}
                                onBlur={(e) => handleBlur(e.target.value, "stock")}
                            />
                            {errors.stock && (
                                <div className="showErrorMessage">{errors.stock}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price</label>
                            <input
                                id="price"
                                type="number"
                                value={formData.price}
                                onChange={(e) => handleChange(e.target.value, "price")}
                                onBlur={(e) => handleBlur(e.target.value, "price")}
                            />
                            {errors.price && (
                                <div className="showErrorMessage">{errors.price}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label htmlFor="image">Image URL</label>
                            <input
                                id="image"
                                type="text"
                                value={formData.image}
                                onChange={(e) => handleChange(e.target.value, "image")}
                                onBlur={(e) => handleBlur(e.target.value, "image")}
                            />
                            {errors.image && (
                                <div className="showErrorMessage">{errors.image}</div>
                            )}
                        </div>
                        <div className="form-group">
                            <label>
                                <input
                                    type="checkbox"
                                    checked={formData.status}
                                    onChange={(e) => handleChange(e.target.checked, "status")}
                                />
                                Status
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};