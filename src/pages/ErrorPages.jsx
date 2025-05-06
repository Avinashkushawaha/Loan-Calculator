import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const ErrorPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="text-center max-w-md">
        <div className="mb-6 flex justify-center">
          <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400">
            <AlertTriangle size={48} />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
          Page Not Found
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        
        <div className="space-y-4">
          <Link to="/">
            <Button variant="primary" fullWidth>
              Return to Home
            </Button>
          </Link>
          
          <p className="text-sm text-gray-500 dark:text-gray-500">
            If you believe this is an error, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;