// CustomDropdown.tsx
import React, { useState, useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';

interface CustomDropdownProps {
  options: string[];  // List of options to display
  onSelect: (option: string) => void;  // Callback when an option is selected
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);  // Tracks whether dropdown is open or closed
  const [selectedOption, setSelectedOption] = useState("Select");  // Initially set to the first option
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle the dropdown open/close state
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0]);
    }
  }, [options]);

  // Handle selecting an option
  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    onSelect(option);  // Pass the selected option to the parent via callback
    setIsOpen(false);  // Close dropdown after selection
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdownContainer}>
      {/* Dropdown Header */}
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedOption}
        <span className={styles.dropdownArrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Dropdown List */}
      {isOpen && (
        <div className={styles.dropdownList}>
          {options.map((option, index) => (
            <div
              key={index}
              className={styles.dropdownListItem}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
