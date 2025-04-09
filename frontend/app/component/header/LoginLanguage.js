import { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

// --- Data Structure (Same as before) ---
const menuItems = [
  {
      title: "Insurance",
      path: "#", // Or '/insurance'
      children: [ // Level 1 Items (Column 1)
          {
              title: "Health Insurance",
              path: "/insurance/health",
              children: [ // Level 2 Items for Health Insurance (Column 2)
                  {
                      title: "Health Insurance Companies",
                      path: "/insurance/health/companies",
                      children: [ // Level 3 Items for Companies (Column 3)
                          { title: "HDFC ERGO Health Insurance", path: "/insurance/health/companies/hdfc-ergo" },
                          { title: "Niva Bupa Health Insurance", path: "/insurance/health/companies/niva-bupa" },
                          { title: "Care Health Insurance", path: "/insurance/health/companies/care" },
                          { title: "Aditya Birla Health Insurance", path: "/insurance/health/companies/aditya-birla" },
                          { title: "Star Health Insurance", path: "/insurance/health/companies/star" },
                          { title: "ICICI Lombard Health Insurance", path: "/insurance/health/companies/icici-lombard" },
                          { title: "Reliance Health Insurance", path: "/insurance/health/companies/reliance" },
                          // ... Add more companies
                      ],
                  },
                  { title: "Mediclaim Policy", path: "/insurance/health/mediclaim" },
                  { title: "Best Health Insurance Plans", path: "/insurance/health/best-plans" },
                  { title: "Health Insurance Plans for Family", path: "/insurance/health/family-plans" },
                  { title: "Health Insurance for Senior Citizens", path: "/insurance/health/senior-citizens" },
                  { title: "Health Insurance for Parents", path: "/insurance/health/parents" },
                  { title: "Women Health Insurance", path: "/insurance/health/women" },
                  { title: "Health Insurance for Children", path: "/insurance/health/children" },
                   // ... Add other L2 items under Health Insurance
              ],
          },
          {
              title: "Car Insurance",
              path: "/insurance/car",
               children: [ // Example L2 for Car Insurance
                  { title: "Third Party Car Insurance", path: "/insurance/car/third-party" },
                  { title: "Comprehensive Car Insurance", path: "/insurance/car/comprehensive" },
                  { title: "Car Insurance Add-ons", path: "/insurance/car/addons", children: [ // Example L3
                      {title: "Zero Depreciation", path: "/insurance/car/addons/zero-dep"},
                      {title: "Engine Protect", path: "/insurance/car/addons/engine-protect"},
                  ] },
               ]
          },
          { title: "Bike Insurance", path: "/insurance/bike", children: [/* L2 Items */] },
          { title: "Life Insurance", path: "/insurance/life", children: [/* L2 Items */] },
          { title: "Term Insurance", path: "/insurance/term", children: [/* L2 Items */] },
          { title: "Investment", path: "/insurance/investment", children: [/* L2 Items */] },
          { title: "Business Insurance", path: "/insurance/business", children: [/* L2 Items */] },
          { title: "Travel Insurance", path: "/insurance/travel", children: [/* L2 Items */] },
      ],
  },
  { title: "Insurance Advisors", path: "/insurance-advisors" },
  { title: "Renew", path: "/renew" },
  {
      title: "Support",
      path: "#", // Or '/support'
      children: [
          { title: "Contact Us", path: "/support/contact", children: [ /* L2 Items */ ] },
          { title: "FAQs", path: "/support/faq" },
      ]
  },
  { title: "News", path: "/news" },
  { title: "Become POSP Agent", path: "/posp-agent" },
];

// --- SVG Icons ---
const ChevronDownIcon = () => (
  <svg className="ml-1 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg className="ml-2 h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L10.94 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
  </svg>
);

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
      <div className='flex language-container'>
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
          <div className="absolute right-0 mt-0 w-28 bg-white border border-gray-200 rounded-md shadow-md z-10">
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