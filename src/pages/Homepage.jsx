import React, { useState } from 'react';

// Utility functions (these would typically be in a separate file)
const calculateMonthlyPayment = (principal, interestRate, termYears) => {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = termYears * 12;
  return principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / 
         (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
};

const calculateTotalPayment = (monthlyPayment, termYears) => {
  return monthlyPayment * termYears * 12;
};

const calculateTotalInterest = (totalPayment, principal) => {
  return totalPayment - principal;
};

const generateAmortizationSchedule = (principal, interestRate, termYears) => {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = termYears * 12;
  let balance = principal;
  const schedule = [];
  
  for (let i = 1; i <= numberOfPayments; i++) {
    const interestPayment = balance * monthlyRate;
    const principalPayment = calculateMonthlyPayment(principal, interestRate, termYears) - interestPayment;
    balance -= principalPayment;
    
    schedule.push({
      month: i,
      payment: interestPayment + principalPayment,
      principal: principalPayment,
      interest: interestPayment,
      balance: balance > 0 ? balance : 0
    });
  }
  
  return schedule;
};

// Components (these would typically be in separate files)
const LoanForm = ({ onCalculate }) => {
  const [formData, setFormData] = useState({
    principal: 100000,
    interestRate: 5.5,
    termYears: 30,
    currency: 'USD'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'principal' || name === 'interestRate' || name === 'termYears' 
        ? parseFloat(value) 
        : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCalculate(
      formData.principal,
      formData.interestRate,
      formData.termYears,
      formData.currency
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Loan Amount
        </label>
        <input
          type="number"
          name="principal"
          value={formData.principal}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          step="1000"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Interest Rate (%)
        </label>
        <input
          type="number"
          name="interestRate"
          value={formData.interestRate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="0"
          step="0.1"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Loan Term (years)
        </label>
        <input
          type="number"
          name="termYears"
          value={formData.termYears}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Currency
        </label>
        <select
          name="currency"
          value={formData.currency}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="INR">INR (₹)</option>
          <option value="GBP">GBP (£)</option>
          <option value="JPY">JPY (¥)</option>
          <option value="AUD">AUD ($)</option>
          <option value="CAD">CAD ($)</option>
        </select>
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
      >
        Calculate
      </button>
    </form>
  );
};

const LoanSummary = ({ principal, monthlyPayment, totalPayment, totalInterest, currency }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Loan Summary</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Loan Amount:</span>
          <span className="font-medium">{formatCurrency(principal)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Monthly Payment:</span>
          <span className="font-medium">{formatCurrency(monthlyPayment)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Payment:</span>
          <span className="font-medium">{formatCurrency(totalPayment)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Total Interest:</span>
          <span className="font-medium">{formatCurrency(totalInterest)}</span>
        </div>
      </div>
    </div>
  );
};

const PaymentChart = ({ principal, totalInterest, currency }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount);
  };

  const principalPercentage = (principal / (principal + totalInterest)) * 100;
  const interestPercentage = (totalInterest / (principal + totalInterest)) * 100;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Payment Breakdown</h3>
      <div className="flex items-center justify-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="10"
              strokeDasharray={`${principalPercentage} ${100 - principalPercentage}`}
              strokeDashoffset="25"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#10b981"
              strokeWidth="10"
              strokeDasharray={`${interestPercentage} ${100 - interestPercentage}`}
              strokeDashoffset={25 - principalPercentage}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-medium">
              {formatCurrency(principal + totalInterest)}
            </span>
            <span className="text-sm text-gray-500">Total</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center">
          <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm">Principal: {formatCurrency(principal)}</span>
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm">Interest: {formatCurrency(totalInterest)}</span>
        </div>
      </div>
    </div>
  );
};

const AmortizationTable = ({ schedule, currency }) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;
  const totalPages = Math.ceil(schedule.length / rowsPerPage);

  const paginatedSchedule = schedule.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 overflow-x-auto">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Amortization Schedule</h3>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-700">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Month</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Payment</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Principal</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Interest</th>
            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Balance</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
          {paginatedSchedule.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{item.month}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(item.payment)}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(item.principal)}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(item.interest)}</td>
              <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(item.balance)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

const LoanComparison = ({ currentScenario, currency }) => {
  const [scenarios, setScenarios] = useState([
    { ...currentScenario, label: "Current" },
    { principal: currentScenario.principal * 0.9, interestRate: currentScenario.interestRate - 1, termYears: currentScenario.termYears - 5, label: "Better Rate & Term" },
    { principal: currentScenario.principal * 1.1, interestRate: currentScenario.interestRate + 1, termYears: currentScenario.termYears + 5, label: "Worse Rate & Term" }
  ]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 2
    }).format(amount);
  };

  const calculateScenario = (scenario) => {
    const monthlyPayment = calculateMonthlyPayment(scenario.principal, scenario.interestRate, scenario.termYears);
    const totalPayment = calculateTotalPayment(monthlyPayment, scenario.termYears);
    const totalInterest = calculateTotalInterest(totalPayment, scenario.principal);
    
    return {
      ...scenario,
      monthlyPayment,
      totalPayment,
      totalInterest
    };
  };

  const calculatedScenarios = scenarios.map(calculateScenario);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Loan Comparison</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Scenario</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Loan Amount</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Interest Rate</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Term</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Monthly Payment</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Total Interest</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
            {calculatedScenarios.map((scenario, index) => (
              <tr key={index}>
                <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{scenario.label}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(scenario.principal)}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{scenario.interestRate}%</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{scenario.termYears} years</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(scenario.monthlyPayment)}</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{formatCurrency(scenario.totalInterest)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Main App Component
const HomePage = () => {
  const [loanDetails, setLoanDetails] = useState({
    principal: 100000,
    interestRate: 5.5,
    termYears: 30,
    currency: 'USD',
    monthlyPayment: calculateMonthlyPayment(100000, 5.5, 30),
    totalPayment: calculateTotalPayment(calculateMonthlyPayment(100000, 5.5, 30), 30),
    totalInterest: calculateTotalInterest(
      calculateTotalPayment(calculateMonthlyPayment(100000, 5.5, 30), 30), 
      100000
    ),
    schedule: generateAmortizationSchedule(100000, 5.5, 30),
    calculated: false
  });

  const handleCalculate = (principal, interestRate, termYears, currency) => {
    const monthlyPayment = calculateMonthlyPayment(principal, interestRate, termYears);
    const totalPayment = calculateTotalPayment(monthlyPayment, termYears);
    const totalInterest = calculateTotalInterest(totalPayment, principal);
    const schedule = generateAmortizationSchedule(principal, interestRate, termYears);
    
    setLoanDetails({
      principal,
      interestRate,
      termYears,
      currency,
      monthlyPayment,
      totalPayment,
      totalInterest,
      schedule,
      calculated: true
    });
    
    // Scroll to results if not already visible
    const resultsElement = document.getElementById('loan-results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Loan Calculator
        </h1>
      </div>
      
      <div className="max-w-5xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-all duration-300">
          
          <LoanForm onCalculate={handleCalculate} />
        </div>
        
        {loanDetails.calculated && (
          <div id="loan-results" className="mt-8 space-y-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <LoanSummary 
                principal={loanDetails.principal}
                monthlyPayment={loanDetails.monthlyPayment}
                totalPayment={loanDetails.totalPayment}
                totalInterest={loanDetails.totalInterest}
                currency={loanDetails.currency}
              /> */}
              
              {/* <PaymentChart 
                principal={loanDetails.principal}
                totalInterest={loanDetails.totalInterest}
                currency={loanDetails.currency}
              /> */}
            </div> 
            
            <AmortizationTable 
              schedule={loanDetails.schedule}
              currency={loanDetails.currency}
            />
            
            {/* <LoanComparison 
              currentScenario={{
                principal: loanDetails.principal,
                interestRate: loanDetails.interestRate,
                termYears: loanDetails.termYears
              }}
              currency={loanDetails.currency}
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;