import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AmortizationTable = ({ schedule, currency }) => {
  const [expanded, setExpanded] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  
  // Calculate total pages
  const totalPages = Math.ceil(schedule.length / itemsPerPage);
  
  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = schedule.slice(indexOfFirstItem, indexOfLastItem);
  
  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Format currency helper function
  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency || 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300">
      <div 
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Amortization Schedule
        </h2>
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>
      
      {expanded && (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-gray-750">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Principal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Interest
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Balance
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {currentItems.map((item) => (
                  <tr key={item.paymentNumber} className="hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {item.paymentNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {formatCurrency(item.paymentAmount, currency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 dark:text-blue-400">
                      {formatCurrency(item.principalPayment, currency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-orange-600 dark:text-orange-400">
                      {formatCurrency(item.interestPayment, currency)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">
                      {formatCurrency(item.remainingBalance, currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="p-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{' '}
                  <span className="font-medium">{Math.min(indexOfLastItem, schedule.length)}</span> of{' '}
                  <span className="font-medium">{schedule.length}</span> payments
                </p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 
                            bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                            disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Previous
                </button>
                <button
                  onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 
                            bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600
                            disabled:opacity-50 disabled:pointer-events-none hover:bg-gray-100 dark:hover:bg-gray-600"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default AmortizationTable;