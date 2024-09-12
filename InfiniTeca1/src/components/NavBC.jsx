import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBC({ User, Email }) {
  const navigate = useNavigate();

  return (
    <div id="Nav2">
      <div id="Box2">
        <img src="icon.png" alt="Logo" id="logo2" />
        <div className="user2">
        <p className="txt2">{User} </p>
        <p className="txt2">{Email} </p>
        </div>
      </div>

      <div className="nav-area2">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Perfil")}>Perfil</li>
          <li onClick={() => navigate("/Config")}>Config</li>
        </ul>
      </div>
    </div>
  );
}
