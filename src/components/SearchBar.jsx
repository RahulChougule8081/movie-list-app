import React from 'react';

const SearchBar = ({ setQuery }) => {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search movies..."
      onChange={handleChange}
      className="search-input"
    />
  );
};

export default SearchBar;
