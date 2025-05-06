import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors duration-300">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; {currentYear} Loan Calculator. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;