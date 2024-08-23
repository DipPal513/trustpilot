import React from 'react';

const ReviewLoader = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
                <div className="flex items-center gap-4 mb-4 animate-pulse">
                    <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                    <div>
                        <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-5 bg-gray-300 rounded w-24 mb-2"></div>
                        <div className="h-4 bg-gray-300 rounded w-20"></div>
                    </div>
                </div>
            </div>
  );
};

export default ReviewLoader;
