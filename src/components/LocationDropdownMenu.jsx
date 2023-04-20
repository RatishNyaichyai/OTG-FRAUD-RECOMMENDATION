import React, { useState } from "react";
import "./styles/DropdownMenu.css";

function LocationDropdownMenu({ options, onSelection, selectedLocation }) {
  const [isOpen, setIsOpen] = useState(false);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClick = (option) => {
    onSelection(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu__header" onClick={onMenuClick}>
        <span>Location:</span>
        <div className="dropdown-menu__selected-option">
          {selectedLocation}
        </div>
        <div className="dropdown-menu__arrow">{isOpen ? "▲" : "▼"}</div>
      </div>
      {isOpen && (
        <div className="dropdown-menu__options">
          {options.map((option) => (
            <div
              className="dropdown-menu__option"
              key={option.value}
              onClick={() => onOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LocationDropdownMenu;