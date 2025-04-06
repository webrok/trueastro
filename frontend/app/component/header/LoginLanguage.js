import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

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
      <div className='flex'>
      <div 
        className="ml-3 mr-3 relative"
        ref={dropdownRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className="flex items-center px-2 py-1 rounded-md language-btn">
           {language} <IoMdArrowDropdown />
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
            <button className="bg-yellow-400 text-white px-5 py-1 rounded-sm cursor-pointer login text-sm">Login</button>
        </div>
      </div>
      
      
    </>
  );
};

export default LoginLanguage;