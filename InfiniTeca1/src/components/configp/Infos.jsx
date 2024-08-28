import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Importar useNavigate se você estiver usando react-router-dom

export default function Infos({ Email, Senha }) {
  const [senhaOculta, setSenhaOculta] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); // Estado para controlar a visibilidade da senha

  const navigate = useNavigate();

  // Função para converter a senha em asteriscos
  const ocultarSenha = (senha) => {
    return '*'.repeat(senha.length);
  };

  // Atualizar a senha oculta sempre que a senha mudar
  useEffect(() => {
    setSenhaOculta(ocultarSenha(Senha));
  }, [Senha]);

  // Alternar a visibilidade da senha
  const alternarVisibilidade = () => {
    setMostrarSenha(!mostrarSenha);
  };

  return (
    <div className="box">
      
      <p className="ES">Seu Email</p>
      <div className="pswrd">
        <p className="snh"> {Email} </p>
      </div>

      <p className="ES">Altere sua Senha</p>
      <div className="pswrd">
        <p className="snh">
          {mostrarSenha ? Senha : senhaOculta}
        </p>
        
        <button className="bt2" onClick={alternarVisibilidade}>
          {mostrarSenha ? 'Ocultar' : 'Mostrar'}
        </button>
        <button className="bt1" onClick={() => navigate('/SenhaNova')}> Alterar </button>
      </div>
    </div>
  );
}
