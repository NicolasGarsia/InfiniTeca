import React from "react";
import { useState } from "react";
import "../css/signup.css";

function Singup() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  return (
    <>
      <div className="container">
        <h1>Faça seu cadastro!!</h1>
        <form>
          <input
            type="text"
            placeholder="Digite seu Email"
            onChange={() => setEmail(email)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={() => setSenha(senha)}
            value={senha}
          />
          <input
            type="password"
            placeholder="Repita sua senha"
            onChange={() => setSenhaConfirma(senhaConfirma)}
            value={senhaConfirma}
          />
          <button type="submit">Cadastre aqui</button>
        </form>

        <a href="">Já tem conta, faça login.</a>
      </div>
    </>
  );
}

export default Singup;
