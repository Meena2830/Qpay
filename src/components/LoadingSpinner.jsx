import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-32 mt-16">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-primaryGreen"></div>
    </div>
  );
};

export default LoadingSpinner;