import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import './styles/SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <form>
        <div className="search-wrapper">
          <Icon
            className="search-icon"
            icon="material-symbols:search"
            width="20"
            height="20"
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
