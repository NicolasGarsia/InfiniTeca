import React from "react";
import { useNavigate } from "react-router-dom";

export default function Books({ NomeL, InfoL, Autor, Editora, Pags }) {
  const navigate = useNavigate();

  return (
    <div className="geral">

      <div className="LvEImgs">
          <img className="livro" src="harry.png" alt="Livro" />
        <div className="imgsL">
          <img className="img" src="Livro.jpg" alt="img1" />
          <img className="img" src="Livro.jpg" alt="img2" />
          <img className="img" src="Livro.jpg" alt="img3" />
        </div>
      </div>

      <div className="infosL">
        <div className="tituloL">
          <p className="txtNL">{NomeL}</p>
          <p>S2</p>
        </div>

        <div className="resumoL">
          <p className="txtI">{InfoL}</p>
        </div>

        <div className="caracteristicas">
          <li className="txtPg">{Pags}pg</li>
          <li className="txtAt">{Autor}</li>
          <li className="txtEdt">{Editora}</li>
        </div>

      </div>
    </div>
  );
}
