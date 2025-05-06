import React from 'react';
import { CreditCard, TrendingUp, Calculator, Shield } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          About Loan Calculator
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Your trusted financial planning companion for making informed loan decisions.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8 border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            Our Mission
          </h2>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            SmartLoan Calculator was created with a simple mission: to empower individuals and businesses 
            with the tools they need to make informed financial decisions. We believe that understanding 
            the full picture of a loan commitment is essential for financial well-being.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Our calculator provides transparent insights into loan dynamics, helping you visualize exactly 
            what you're paying for and how different variables affect your financial commitment. Whether 
            you're considering a mortgage, auto loan, personal loan, or business financing, our tool gives 
            you the clarity needed to proceed with confidence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md text-blue-600 dark:text-blue-400 mr-4">
                <Calculator size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Accurate Calculations
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our calculator uses industry-standard formulas to provide precise payment amounts, 
              amortization schedules, and interest breakdowns. You can trust our numbers when planning 
              your financial future.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-md text-teal-600 dark:text-teal-400 mr-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Scenario Analysis
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Compare different loan scenarios side by side to find the option that best suits your financial 
              situation. Adjust terms, rates, and amounts to see immediate impacts on your payment structure.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-md text-orange-600 dark:text-orange-400 mr-4">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Multi-Currency Support
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Plan your loans in multiple currencies with our built-in currency support. Our tool adapts to 
              your location and financial needs regardless of where you are in the world.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-md text-purple-600 dark:text-purple-400 mr-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Privacy Focused
              </h3>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We never store your financial data. All calculations happen in your browser, ensuring your 
              sensitive information never leaves your device. Your privacy matters to us.
            </p>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">
            How to Use the Calculator
          </h2>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center mr-3 text-sm">
                1
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Enter Your Loan Details</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Input your loan amount, interest rate, and term. Select your preferred currency.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center mr-3 text-sm">
                2
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Review the Results</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Examine your monthly payment, total interest, and view the complete amortization schedule.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center mr-3 text-sm">
                3
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Save Scenarios for Comparison</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Save multiple loan scenarios to compare different options and find the best terms for your situation.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center mr-3 text-sm">
                4
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">Adjust and Recalculate</h3>
                <p className="mt-1 text-gray-700 dark:text-gray-300">
                  Experiment with different values to see how changes affect your loan structure and find the optimal arrangement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;