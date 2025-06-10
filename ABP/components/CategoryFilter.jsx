import React from "react";

function CategoryFilter({ category, setCategory, categories }) {

  return (
    <select value={category} onChange={e => { setCategory(e.target.value); }}>
        
      <option value="">Todas las categorías</option>
      {categories.filter(c => c).map(cat => (
        <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
      ))}
    </select>
  );
}

export default CategoryFilter;
