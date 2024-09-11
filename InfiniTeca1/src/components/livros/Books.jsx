import React from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const NomeL = localStorage.getItem('title')
  const img = localStorage.getItem('img')
  const InfoL = localStorage.getItem('description')
  const Autor = localStorage.getItem('author')
  const Editora = localStorage.getItem('publisher')
  const Pags = localStorage.getItem('pageCount')
  const navigate = useNavigate();

  return (
    <div className="geral">

      <div className="LvEImgs">
          <img className="livro" src={img} alt="Livro" />
        <div className="imgsL">
          <img className="img" src={img} alt="img1" />
          <img className="img" src={img} alt="img2" />
          <img className="img" src={img} alt="img3" />
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
