import React from 'react';

/**
 * Button component with variants based on our custom design system
 * @param {Object} props - Component props
 * @param {string} props.children - Button text or content
 * @param {string} props.variant - Button style variant ('primary', 'secondary', 'outline')
 * @param {function} props.onClick - Click handler function
 * @param {string} props.className - Additional CSS classes
 */
function Button({ children, variant = 'primary', onClick, className = '' }) {
  const getButtonClass = () => {
    switch (variant) {
      case 'secondary':
        return 'btn btn-secondary';
      case 'outline':
        return 'btn btn-outline';
      case 'primary':
      default:
        return 'btn btn-primary';
    }
  };

  return (
    <button className={`${getButtonClass()} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
