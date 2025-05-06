
import React, { useState, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import Button from '../components/ui/Button';

const ExchangeRatesPage = () => {
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  
  // Mock exchange rates data
  const mockRates = {
    base: 'USD',
    rates: {
      EUR: 0.93,
      GBP: 0.79,
      JPY: 151.56,
      CAD: 1.37,
      AUD: 1.53,
      CHF: 0.90,
      CNY: 7.24,
      INR: 83.88,
      BRL: 5.15,
      MXN: 17.01
    }
  };
  
  const [rates, setRates] = useState(mockRates);
  
  useEffect(() => {
    // Simulate API call
    const timer = setTimeout(() => {
      setRates(mockRates);
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleRefresh = () => {
    setLoading(true);
    
    // Simulate API call with slight rate changes
    setTimeout(() => {
      const updatedRates = { ...mockRates };
      
      // Randomly adjust rates slightly
      Object.keys(updatedRates.rates).forEach(currency => {
        const currentRate = updatedRates.rates[currency];
        const change = (Math.random() - 0.5) * 0.02;
        updatedRates.rates[currency] = +(currentRate + change).toFixed(4);
      });
      
      setRates(updatedRates);
      setLastUpdated(new Date());
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Exchange Rates (Live)
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Current exchange rates for major world currencies relative to US Dollar (USD).
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300">
          <div className="p-4 bg-gray-50 dark:bg-gray-750 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Currency Exchange Rates
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Last updated: {lastUpdated.toLocaleString()}
              </p>
            </div>
            <Button 
              onClick={handleRefresh}
              disabled={loading}
              className="flex items-center space-x-2"
            >
              <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
              <span>Refresh</span>
            </Button>
          </div>
          
          <div className="p-6">
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-md">
              <p className="text-sm text-blue-700 dark:text-blue-300">
                Base Currency: <span className="font-medium">US Dollar (USD)</span>
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {Object.entries(rates.rates).map(([currency, rate]) => (
                <div 
                  key={currency}
                  className="p-4 border border-gray-200 dark:border-gray-700 rounded-md hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{currency}</span>
                    <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">{rate}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    1 USD = {rate} {currency}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 bg-gray-50 dark:bg-gray-750 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Note: These exchange rates are for demonstration purposes only and may not reflect current market rates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRatesPage;