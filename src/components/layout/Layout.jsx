import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTheme } from '../../context/ThemeContext';

const Layout = ({ children }) => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-50 transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;