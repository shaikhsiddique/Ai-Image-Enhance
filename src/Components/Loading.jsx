import React from 'react';

function Loading() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid mb-4"></div>
      
      {/* Loading Text */}
      <p className="text-xl font-medium text-gray-700">Loading...</p>
    </div>
  );
}

export default Loading;
