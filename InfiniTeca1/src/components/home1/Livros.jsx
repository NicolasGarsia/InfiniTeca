import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carrossel"

export default function Liv() {
    const navigate = useNavigate();

    
    return (
      <>
      <Carousel/>
        <h2 id="txt"> Recomendados </h2>
        <div id="estante" className="estant">
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="harry.png" alt="Nome Livro" />
            <p>Harry Potter</p>
            <p>Disponiveis (02/05)</p>
          </div>
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>O Hobbit</p>
            <p>Disponiveis (03/05)</p>
          </div>
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>A garota do trem</p>
            <p>Disponiveis (01/05)</p>
          </div>
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>O sol é para todos</p>
            <p>Disponiveis (05/05)</p>
          </div>
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>Dom Casmurro</p>
            <p>Disponiveis (01/05)</p>
          </div>
          <div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>1984</p>
            <p>Disponiveis (00/05)</p>
          </div><div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>Cem Anos de Solidão</p>
            <p>Disponiveis (04/05)</p>
          </div><div className="Book" onClick={() => navigate("/Livro")}>
            <img className="livroh" src="Livro.jpg" alt="Nome Livro" />
            <p>O menino do pijama listrado</p>
            <p>Disponiveis (01/05)</p>
          </div>
        </div>

      </>
    );
  }