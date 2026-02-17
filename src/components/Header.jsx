import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-[60] bg-white shadow-sm border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 mb-2 md:mb-0">
          <img
            src="src/assets/logo.png" // Placeholder logo path
            alt="Dr. Anandibai Joshi Memorial Foundation Logo"
            className="h-12 object-contain"
          />
        </div>

        {/* NGO Name */}
        <div className="text-center md:text-right">
          <h1 className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-gray-800">
            Dr. Anandibai Joshi Memorial Foundation
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;