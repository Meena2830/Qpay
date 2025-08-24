import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 text-center p-4 bg-red-100 rounded mt-16">
      {message}
    </div>
  );
};

export default ErrorMessage;