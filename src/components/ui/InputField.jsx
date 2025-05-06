import React from 'react';

const InputField = ({ 
  label, 
  icon, 
  className = '', 
  ...props 
}) => {
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        {label}
      </label>
      <div className="relative rounded-md shadow-sm">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500 dark:text-gray-400">
            {icon}
          </div>
        )}
        <input
          className={`
            block w-full rounded-md border-gray-300 dark:border-gray-700 
            bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
            focus:border-blue-500 focus:ring-blue-500 transition-colors duration-200
            disabled:bg-gray-100 disabled:dark:bg-gray-900 disabled:cursor-not-allowed
            py-2 text-base sm:text-sm
            ${icon ? 'pl-10' : 'pl-3'} pr-3
            ${className}
          `}
          style={{ borderWidth: '1px' }}
          {...props}
        />
      </div>
    </div>
  );
};

export default InputField;