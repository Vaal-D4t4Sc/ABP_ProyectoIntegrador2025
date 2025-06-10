import React from "react";

function SortFilter({ sortBy, setSortBy, sortOrder, setSortOrder }) {
  return (
   <div> 
    <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
      <option value=""> Ordenar por... </option>
      <option value="price"> Precio</option>
      <option value="rating"> Popularidad </option>
    </select>

    <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
      <option value="asc">Ascendente</option>
      <option value="desc">Descendente</option>
    </select>
   </div>
  );
}

export default SortFilter;
