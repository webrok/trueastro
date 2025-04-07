// NavMenu.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

export default function NavMenu() {
  const [horoscopeOpen, setHoroscopeOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  

  return (
    <div className="flex space-x-6 text-black font-medium menubar">
      <div className="relative">
        <button
          className="hover:text-purple-500 flex items-center text-sm"
          onClick={() => setHoroscopeOpen(!horoscopeOpen)}
        >
          Horoscope <IoMdArrowDropdown />
        </button>
        {horoscopeOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-1">
            {['Daily', 'Weekly', 'Monthly'].map((category, index) => (
              <div key={index} className="relative">
                <button
                  className="block w-full text-left flex items-center text-sm px-4 py-2 hover:bg-gray-100"
                  onClick={() => setSubMenuOpen(subMenuOpen === category ? null : category)}
                >
                  {category} <IoMdArrowDropright />
                </button>
                {subMenuOpen === category && (
                  <div className="absolute left-full top-0 mt-0 ml-1  w-48 bg-white border border-gray-200 rounded-md shadow-md">
                    {['Aries', 'Taurus', 'Gemini'].map((sign, i) => (
                      <div key={i} className="relative">
                        <button
                          className="block w-full text-left flex items-center text-sm px-4 py-2 hover:bg-gray-100"
                        >
                          {sign} <IoMdArrowDropright />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Link href="/reports" className='text-sm'>Reports</Link>
      <Link href="/store" className='text-sm'>Store</Link>
      <Link href="/blogs" className='text-sm'>Blogs</Link>
      <Link href="/celebrity" className='text-sm'>Celebrity</Link>
      <Link href="/join-us" className='text-sm'>Join Us</Link>
    </div>
  );
}