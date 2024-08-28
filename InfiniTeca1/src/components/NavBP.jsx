import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBP({ User }) {
  const navigate = useNavigate();

  return (
    <div id="Nav1">
      <div id="Box1">
        <div className="user">
        <img src="icon.png" alt="Logo" id="logo1" />
        <p className="txt1">{User} </p>
        </div>

        <input
          type="search"
          className="search1"
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
