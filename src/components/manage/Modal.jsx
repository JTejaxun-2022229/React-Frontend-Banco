import { useState, useEffect } from "react";
import "./modal.css";

export const Modal = ({ isOpen, toggleModal, user }) => {
  return (
    <section className="page modal-1-page">
      <div
        className={`modal-1-overlay ${isOpen ? "open" : ""}`}
        onClick={toggleModal}
      >
        <div className="modal-1-modal">
          <header>
            <h2>User Data</h2>
            <h3>Try Hologram today</h3>
          </header>
          <form>
            <div className="textbox">
              <span className="material-symbols-outlined">account_circle</span>
              <input
                type="email"
                placeholder="Email"
                value={user ? user.email : ""}
                readOnly
              />
            </div>
            <div className="textbox">
              <span className="material-symbols-outlined">lock</span>
              <input
                type="password"
                placeholder="Password"
                value={user ? user.password : ""}
                readOnly
              />
            </div>
            <button
              className="signup-button"
              type="submit"
              onClick={toggleModal}
            >
              <p>Sign up free</p>
              <span className="material-symbols-outlined"> trending_flat </span>
            </button>
          </form>
          <p>No credit card information required</p>
        </div>
      </div>
    </section>
  );
};
