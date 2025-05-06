import React, { useState } from 'react';

const LoanForm = ({ onCalculate }) => {
  const [principal, setPrincipal] = useState(100000);
  const [interestRate, setInterestRate] = useState(5.5);
  const [termYears, setTermYears] = useState(30);
  const [currency, setCurrency] = useState('USD');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(principal, interestRate, termYears, currency);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto">
      <div className="space-y-4">
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Loan Amount</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <input
              type="number"
              value={principal}
              min={1}
              step={1000}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              className="pl-10 w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Interest Rate (%)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="1" x2="12" y2="23"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
            </div>
            <input
              type="number"
              value={interestRate}
              min={0}
              max={100}
              step={0.1}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="pl-10 w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Term (Years)</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>
            <input
              type="number"
              value={termYears}
              min={1}
              max={50}
              onChange={(e) => setTermYears(Number(e.target.value))}
              className="pl-10 w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium">Currency</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full p-2 border rounded-md"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
          </select>
        </div>
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
      >
        CALCULATE
      </button>
    </form>
  );
};

export default LoanForm;