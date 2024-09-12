import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");

  const submitCadastro = () => {
    if (senha == senhaConfirma) {
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      navigate('/SignIn')
    } else alert("Senhas não correspondem");
  };


  return (
    <>
      <div className="container">
        <h1>Faça seu cadastro!!</h1>
        <form>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
          <input
            type="password"
            placeholder="Repita sua senha"
            onChange={(e) => setSenhaConfirma(e.target.value)}
            value={senhaConfirma}
          />
          <button
            type="submit"
            onClick={() => {
              submitCadastro();
            }}
          >
            Cadastre aqui
          </button>
        </form>

        <p onClick={() => navigate("/SignIn")}>Já tem conta? Faça login.</p>
      </div>
    </>
  );
}

export default Signup;
