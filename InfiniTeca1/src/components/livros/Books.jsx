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
      </div>

      <div className="infosL">

        <div className="tituloL">
          <p className="txtNL">{NomeL}</p>
          <div className="s2">
            <p>S2</p> 
          </div>
        </div>

        <div className="resumoL">
          <p className="txtI">{InfoL}</p>
        </div>

        <div className="caracteristicas">

          <div className="itens">
            <li className="txtAt">{Autor}</li>
            <p>autor</p>
          </div>

          <div className="itens">
            <li className="txtEdt">{Editora}</li>
            <p>editora</p>
          </div>



          <div className="itens">
            <li className="txtPg">{Pags}.pg</li>
            <p>paginas</p>
          </div>



        </div>

        <div className="botoesL">
          <button className="botaoL">
            <p>Onde</p>
          </button>
          <button className="botaoL">
            <p>Alugar</p>
          </button>
        </div>

      </div>
    </div>
  );
}
