import { useState } from 'react';
import './styles/DropdownMenu.css';
import { Icon } from '@iconify/react';


function CalanderDropdownMenu({ options, onSelection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const onMenuClick = () => {
    setIsOpen(!isOpen);
  }

  const onOptionClick = (option) => {
    setSelectedOption(option);
    onSelection(option);
  }

  return (
    <div className='dropdown-menu'>
      <div className='dropdown-menu__header' onClick={onMenuClick}>
        <Icon className='calender-icon' icon="uil:calender" width="20" height="20" />
        <div className='dropdown-menu__selected-option'>{selectedOption.label}</div>
        <div className='dropdown-menu__arrow'>{isOpen ? '▲' : '▼'}</div>
      </div>
      {isOpen && (
        <div className='dropdown-menu__options'>
          {options.map(option => (
            <div
              className='dropdown-menu__option'
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

export default CalanderDropdownMenu;