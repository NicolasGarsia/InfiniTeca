import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signup.css";

function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [emailUser, setEmailUser] = useState("");
  const [passwordUser, setPasswordUser] = useState("");

  useEffect(() => {
    setEmailUser(localStorage.getItem('email'))
    setPasswordUser(localStorage.getItem('email'))
  },[])

  const submitLogin = () => {
    if (email == emailUser && senha == passwordUser) {
      sessionStorage.setItem("isLoggedOn", 'true');
      navigate('/')
      console.log('funcionou')
    } else window.alert("As senhas não correspondem");
  };
  return (
    <>
      <div className="container">
        <h1>Log-in</h1>
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
          <button
            type="submit"
            onClick={() => 
              submitLogin()
            }
          >
            Entrar
          </button>
        </form>
        <p onClick={() => navigate('/ForgotPassword')}>Esqueci a Senha</p>
        <p onClick={() => navigate('/SignUp')}>Não tem conta? Cadastre-se</p>
      </div>
    </>
  );
}

export default SignIn;
