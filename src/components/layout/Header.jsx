import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import Switch from '@mui/material/Switch';

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-blue-600 dark:bg-blue-800 text-white shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-tight flex items-center">
          <span className="text-2xl mr-2"></span>
          Loan Calculator
        </Link>
        
        <nav className="flex items-center mt-4 md:mt-0">
          <ul className="flex space-x-1 md:space-x-4">
            <li>
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive('/') 
                    ? 'bg-blue-700 dark:bg-blue-900' 
                    : 'hover:bg-blue-500 dark:hover:bg-blue-700'}`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link 
                to="/exchange-rates" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive('/exchange-rates') 
                    ? 'bg-blue-700 dark:bg-blue-900' 
                    : 'hover:bg-blue-500 dark:hover:bg-blue-700'}`}
              >
                EXCHANGE RATES (LIVE)
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive('/about') 
                    ? 'bg-blue-700 dark:bg-blue-900' 
                    : 'hover:bg-blue-500 dark:hover:bg-blue-700'}`}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link 
                to="/error" 
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 
                  ${isActive('/error') 
                    ? 'bg-blue-700 dark:bg-blue-900' 
                    : 'hover:bg-blue-500 dark:hover:bg-blue-700'}`}
              >
                ERROR PAGE
              </Link>
            </li>
          </ul>
          <Switch
  checked={darkMode}
  onChange={toggleDarkMode}
  inputProps={{ 'aria-label': darkMode ? 'Switch to light mode' : 'Switch to dark mode' }}
/>
        </nav>
      </div>
    </header>
  );
};

export default Header;