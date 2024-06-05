import { useState } from "react";
import { Login } from "../../components/Login";
import logo from "../../assets/img/logoBanco.png";
import './authPage.css';

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthPageToggle = () => {
    setIsLogin((prev) => !prev);
  };

  return (
    <div className="background-auth-container">
      <div className="auth-container">
      {/* Fondo de la imagen con transparencia */}
      <div className="auth-logo-container">
        <img src={logo}
          width="100%"
          height="100%"
        />
      </div>
      <div className="auth-form-container">
        <div className="title-form-login">
          <h1>Login</h1>
        </div>
        <Login switchAuthHandler={handleAuthPageToggle} />
      </div>
    </div>
    </div>

  );
};