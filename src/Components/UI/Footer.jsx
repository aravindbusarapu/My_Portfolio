import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6">
      <div className="container mx-auto">
        <p>Designed and Built by Sai Prakash with Love & Coffee</p>
        <div className="flex justify-center space-x-4 mt-3">
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
