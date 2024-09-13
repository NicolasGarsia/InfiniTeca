import React from "react";
import { useNavigate } from "react-router-dom";

export default function Books() {
  const NomeL = localStorage.getItem('title');
  const img = localStorage.getItem('img');
  const InfoL = localStorage.getItem('description');
  const Autor = localStorage.getItem('author');
  const Editora = localStorage.getItem('publisher');
  const Pags = localStorage.getItem('pageCount');
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
            <img src="./favBla.png" className="fav" alt="" />
          </div>
        </div>

        <div className="resumoL">
          <p className="txtI">{InfoL}</p>
        </div>

        <div className="caracteristicas">
          <div className="itens">
            <li className="txtn">{Autor}</li>
            <p className="txta">autor</p>
          </div>

          <div className="itens">
            <li className="txtn">{Editora}</li>
            <p className="txta">editora</p>
          </div>

          <div className="itens">
            <li className="txtn">{Pags}</li>
            <p className="txta">paginas</p>
          </div>
        </div>

        <div className="botoesL">
          <button className="botaoL" >
            <p className="txtb">Onde</p>
          </button>
          <button className="botaoL" onClick={() => navigate("/Aluguel")}>
            <p className="txtb">Alugar</p>
          </button>
        </div>
      </div>
    </div>
  );
}
