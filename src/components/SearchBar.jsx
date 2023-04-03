import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "./styles/SearchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onSearchSubmit = (event) => {
    event.preventDefault();
    props.onSearch(searchValue);
  };

  return (
    <div className="search-bar">
      <form onSubmit={onSearchSubmit}>
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
            onChange={onSearchChange}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
