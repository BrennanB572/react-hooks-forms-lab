import React from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  function handleSearch(e) {
    onSearchChange(e.target.value)
  }
  return (
    <div className="Filter"> 
    <input 
         onChange={handleSearch}
         type="text"
         name="search"
         value={search}
         placeholder="Search"
    />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
