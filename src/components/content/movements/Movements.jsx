import { useState, useEffect } from "react";
import axios from "axios";
import "./modal.css";

export const Movements = ({ isOpen, toggleModal, user, refreshUsers }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    uid: "",
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
      console.log("User data loaded:", user);
      setFormData({
        uid: user.uid || "",
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
      [name]: value
    }));
    console.log("Form data updated:", formData);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", formData);

    try {
      const response = await axios.put(
        `http://127.0.0.1:4000/quetzalito/v1/user/updateUser/${formData.uid}`,
        formData
      );
      console.log("Response received:", response);

      toggleModal();
      refreshUsers();
    } catch (error) {
      console.error("Error al actualizar el usuario:", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://127.0.0.1:4000/quetzalito/v1/user/${formData.uid}`
      );
      console.log("Response received:", response);

      toggleModal();
      refreshUsers();
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
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
            <h3>Hi {admin.name}, you can modify or delete this user</h3>
          </header>
          <form className="form-container" onSubmit={handleFormSubmit}>
            {/* Name */}
            <div className="textbox">
              <label>Name</label>
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
              <label>Username</label>
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
              <label>Account</label>
              <input
                type="text"
                name="account"
                placeholder="Account"
                value={formData.account}
                onChange={handleInputChange}
              />
            </div>

            {/* WorkPlace */}
            <div className="textbox">
              <label>WorkPlace</label>
              <input
                type="text"
                name="workPlace"
                placeholder="WorkPlace"
                value={formData.workPlace}
                onChange={handleInputChange}
              />
            </div>

            {/* Address */}
            <div className="textbox full-width">
              <label>Address</label>
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
              <label>Phone</label>
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
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {/* Salary */}
            <div className="textbox">
              <label>Salary</label>
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
              <label>Balance</label>
              <input
                type="text"
                name="balance"
                placeholder="Balance"
                value={formData.balance}
                onChange={handleInputChange}
              />
            </div>

            {/* Botones para confirmar edición y eliminar */}
            <div className="button-container">
              <button className="signup-button" type="submit">
                <p>Edit</p>
              </button>
              <button
                className="signup-button"
                type="button"
                onClick={handleDeleteUser}
              >
                <p>Delete</p>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};