import React from 'react';

const variantStyles = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm',
  secondary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-sm',
  outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30',
  text: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/30'
};

const Button = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  return (
    <button
      className={`
        py-2 px-4 rounded-md font-medium text-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:pointer-events-none
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;