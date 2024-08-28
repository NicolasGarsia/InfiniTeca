import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavB({ User }) {
  const navigate = useNavigate();

  return (
    <div id="Nav">
      <div id="Box">
        <div className="user">
          <img src="logo.jpeg" alt="Logo" id="logo" />
          <p className="txt">{User} </p>
        </div>
        
        <input
          type="search"
          className="search"
          id="1"
          placeholder="Pesquise aqui..."
        />
      </div>

      <div className="nav-area">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Perfil")}>Perfil</li>
          <li onClick={() => navigate("/Config")}>Config</li>
        </ul>
      </div>
    </div>
  );
}
