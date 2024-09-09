// src/NavB.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookSearch from './Apilivro';

export default function NavB() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  return (
    <div id="Nav">
      <div id="Box">
        <div className="user">
          <img src="logo.jpeg" alt="Logo" id="logo" />
        </div>
        
        <input
          type="search"
          className="search"
          id="1"
          placeholder="Pesquise aqui..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
         
        />
       
      </div>

      <div className="nav-area">
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/Perfil")}>Perfil</li>
          <li onClick={() => navigate("/Config")}>Config</li>
        </ul>
      </div>


      <BookSearch query={query} />
    </div>
  );
}
