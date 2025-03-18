import React from 'react';

function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <label htmlFor="category">Filter by Category:</label>
      <select id="category" onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
    </div>
  );
}

export default Filter;