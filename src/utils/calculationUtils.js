/**
 * Calculate monthly payment for a loan
 * 
 * @param {number} principal - The loan amount
 * @param {number} interestRate - Annual interest rate (in percentage)
 * @param {number} termYears - Loan term in years
 * @returns {number} Monthly payment amount
 */
export const calculateMonthlyPayment = (principal, interestRate, termYears) => {
    const monthlyRate = interestRate / 100 / 12;
    const termMonths = termYears * 12;
    
    if (monthlyRate === 0) return principal / termMonths;
    
    const payment = principal * 
      (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
      (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    return payment;
  };
  
  /**
   * Calculate total payment over the life of the loan
   * 
   * @param {number} monthlyPayment - The monthly payment amount
   * @param {number} termYears - Loan term in years
   * @returns {number} Total payment amount
   */
  export const calculateTotalPayment = (monthlyPayment, termYears) => {
    return monthlyPayment * termYears * 12;
  };
  
  /**
   * Calculate total interest paid over the life of the loan
   * 
   * @param {number} totalPayment - The total payment amount
   * @param {number} principal - The original loan amount
   * @returns {number} Total interest paid
   */
  export const calculateTotalInterest = (totalPayment, principal) => {
    return totalPayment - principal;
  };
  
  /**
   * Generate amortization schedule for a loan
   * 
   * @param {number} principal - The loan amount
   * @param {number} interestRate - Annual interest rate (in percentage)
   * @param {number} termYears - Loan term in years
   * @returns {Array} Array of payment objects containing details for each payment
   */
  export const generateAmortizationSchedule = (principal, interestRate, termYears) => {
    const monthlyRate = interestRate / 100 / 12;
    const termMonths = termYears * 12;
    const monthlyPayment = calculateMonthlyPayment(principal, interestRate, termYears);
    
    let balance = principal;
    const schedule = [];
    
    for (let paymentNumber = 1; paymentNumber <= termMonths; paymentNumber++) {
      const interestPayment = balance * monthlyRate;
      let principalPayment = monthlyPayment - interestPayment;
      
      if (balance < monthlyPayment) {
        principalPayment = balance;
      }
      
      balance -= principalPayment;
      if (Math.abs(balance) < 0.01) balance = 0;
      
      schedule.push({
        paymentNumber,
        paymentAmount: principalPayment + interestPayment,
        principalPayment,
        interestPayment,
        remainingBalance: balance
      });
      
      if (balance === 0) break;
    }
    
    return schedule;
  };
  
  /**
   * Format currency amount
   * 
   * @param {number} amount - The amount to format
   * @param {string} currencyCode - ISO currency code (default: USD)
   * @returns {string} Formatted currency string
   */
  export const formatCurrency = (amount, currencyCode = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  };