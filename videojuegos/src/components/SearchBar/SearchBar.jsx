import React from "react";
function SearchBar({filtro, onFiltroChange }) {
    return (
      
        <input className="search-bar text-black rounded-2xl h-10  my-4 mr-4 ml-96 w-8/12"
          type="text"
          value={filtro}
          placeholder=" Buscar..."
          onChange={onFiltroChange}
         
        /> 
        
        );}

 export default SearchBar;  
    