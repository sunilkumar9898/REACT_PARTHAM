import React from 'react'

const PageNotFound = () => {
  return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="shadow-lg rounded-lg p-10 text-center max-w-md w-full">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  404 - Page Not Found
              </h1>
              <p className="text-gray-600 mb-6">
                  Oops! The page you are looking for does not exist.
              </p>

          </div>
      </div>
  );
}

export default PageNotFound
