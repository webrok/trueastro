import { useState, useRef, useEffect } from 'react';
import { FaGlobe } from 'react-icons/fa';

const LoginLanguage = ({ language, setLanguage }) => {
  const [langOpen, setLangOpen] = useState(false);
  
  const dropdownRef = useRef(null);
  
  // Handle mouse events for the dropdown
  const handleMouseEnter = () => {
    setLangOpen(true);
  };
  
  const handleMouseLeave = () => {
    setLangOpen(false);
  };

  return (
    <>
      {/* Language Selector */}
      <div 
        className="ml-6 relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center border border-gray-200 px-2 py-1 rounded-md language-btn">
          <FaGlobe className="mr-1" /> {language} ▼
        </button>
        
        {langOpen && (
          <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-md z-10">
            {['English', 'Hindi', 'தமிழ்'].map((lang) => (
              <button
                key={lang}
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => { setLanguage(lang); }}
              >
                {lang}
              </button>
            ))}
          </div>
        )}
      </div>
      
      <div className="hidden md:flex">
        <button className="bg-purple-500 text-white px-5 py-1 rounded-full cursor-pointer login">Login</button>
      </div>
    </>
  );
};

export default LoginLanguage;