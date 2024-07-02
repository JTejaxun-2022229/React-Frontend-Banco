import { useState, useEffect } from "react";
import "./modal.css";

export const Modal = ({ isOpen, toggleModal, user }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    account: "",
    address: "",
    phone: "",
    email: "",
    workPlace: "",
    salary: "",
    balance: ""
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        username: user.username || "",
        account: user.account || "",
        address: user.address || "",
        phone: user.phone || "",
        email: user.email || "",
        workPlace: user.workPlace || "",
        salary: user.salary || "",
        balance: user.balance || ""
      });
    }
  }, [user]);

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="page modal-1-page">
      <div
        className={`modal-1-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-1-modal" onClick={handleModalClick}>
          <header>
            <h2>User Data</h2>
            <h3>Edit or Delete a User</h3>
          </header>
          <form>
            {/* Name */}
            <div className="textbox">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            {/* Username */}
            <div className="textbox">
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </div>

            {/* No. Account */}
            <div className="textbox">
              <input
                type="text"
                name="account"
                placeholder="Account"
                value={formData.account}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="textbox">
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>

            {/* Phone */}
            <div className="textbox">
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            {/* Email */}
            <div className="textbox">
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* WorkPlace */}
            <div className="textbox">
              <input
                type="text"
                name="workPlace"
                placeholder="WorkPlace"
                value={formData.workPlace}
                onChange={handleInputChange}
              />
            </div>

            {/* Salary */}
            <div className="textbox">
              <input
                type="text"
                name="salary"
                placeholder="Salary"
                value={formData.salary}
                onChange={handleInputChange}
              />
            </div>

            {/* Balance */}
            <div className="textbox">
              <input
                type="text"
                name="balance"
                placeholder="Balance"
                value={formData.balance}
                onChange={handleInputChange}
              />
            </div>

            {/* Botón para confirmar edición */}
            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
            >
              <p>Edit</p>
            </button>

            {/* Botón para eliminar */}
            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
            >
              <p>Delete</p>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};



