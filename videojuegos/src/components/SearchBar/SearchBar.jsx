import React from "react";
function SearchBar({filtro, onFiltroChange }) {
    return (
      
        <input className="search-bar text-black"
          type="text"
          value={filtro}
          placeholder="Buscar..."
          onChange={onFiltroChange}
         
        />
        
        );}

 export default SearchBar;  
    