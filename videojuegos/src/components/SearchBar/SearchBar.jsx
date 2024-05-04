import React from "react";
function SearchBar({filtro, onFiltroChange }) {
    return (
      
        <input className="search-bar"
          type="text"
          value={filtro}
          placeholder="Buscar..."
          onChange={onFiltroChange}
         
        />
        
        );}

 export default SearchBar;  
    