import React from "react";
function SearchBar({filtro, onFiltroChange }) {
    return (
      
        <input className="search-bar text-black  h-14  my-5 mr-5 ml-96 w-8/12"
          type="text"
          value={filtro}
          placeholder="Buscar..."
          onChange={onFiltroChange}
         
        />
        
        );}

 export default SearchBar;  
    