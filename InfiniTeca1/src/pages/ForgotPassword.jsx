import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("E-mail enviado para recuperação de senha:", email);
    window.alert("Instruções de recuperação de senha enviadas para seu e-mail!");
    navigate("/SignIn"); 
  };

  return (
    <div className="container">
      <h1>Esqueci a Senha</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <button type="submit">Enviar</button>
      </form>
      <p onClick={() => navigate('/SignIn')}>Voltar para o Login</p>
    </div>
  );
}

export default ForgotPassword;
