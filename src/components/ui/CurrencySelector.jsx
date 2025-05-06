import React, { useState } from 'react';
import { ChevronsUpDown } from 'lucide-react';

const currencies = [
  { code: 'USD', label: 'US Dollar ($)', symbol: '$' },
  { code: 'EUR', label: 'Euro (€)', symbol: '€' },
  { code: 'GBP', label: 'British Pound (£)', symbol: '£' },
  { code: 'JPY', label: 'Japanese Yen (¥)', symbol: '¥' },
  { code: 'CAD', label: 'Canadian Dollar (C$)', symbol: 'C$' },
  { code: 'AUD', label: 'Australian Dollar (A$)', symbol: 'A$' },
];

const CurrencySelector = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedCurrency = currencies.find(c => c.code === value) || currencies[0];
  
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
        Currency
      </label>
      <button
        type="button"
        className="relative w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 pl-3 pr-10 text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className="flex items-center">
          <span className="block truncate">{selectedCurrency.label}</span>
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronsUpDown size={16} className="text-gray-400" aria-hidden="true" />
        </span>
      </button>

      {isOpen && (
        <div 
          className="absolute z-10 mt-1 w-full bg-white dark:bg-gray-800 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
          role="listbox"
        >
          {currencies.map((currency) => (
            <div
              key={currency.code}
              className={`
                cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 dark:hover:bg-gray-700
                ${currency.code === value ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-gray-100'}
              `}
              onClick={() => {
                onChange(currency.code);
                setIsOpen(false);
              }}
              role="option"
              aria-selected={currency.code === value}
            >
              <span className="block truncate">
                {currency.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;