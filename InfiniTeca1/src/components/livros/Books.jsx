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
