import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Travel Agency. All rights reserved.</p>
        <div className="mt-4">
          <a href="#" className="mx-2 hover:text-blue-400">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-blue-400">Terms of Service</a>
          <a href="#" className="mx-2 hover:text-blue-400">@code_faizan</a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;