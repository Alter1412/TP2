import React from "react";
function SearchBar({filtro, onFiltroChange }) {
    return (
      
        <input className="search-bar text-black flex-1 h-14  mt-5 mr-5  "
          type="text"
          value={filtro}
          placeholder="Buscar..."
          onChange={onFiltroChange}
         
        />
        
        );}

 export default SearchBar;  
    