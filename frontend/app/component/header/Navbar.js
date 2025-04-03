// NavMenu.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NavMenu() {
  const [horoscopeOpen, setHoroscopeOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  return (
    <div className="flex space-x-6 text-black font-medium menubar">
      <div className="relative">
        <button
          className="hover:text-purple-500"
          onClick={() => setHoroscopeOpen(!horoscopeOpen)}
        >
          Horoscope ▼
        </button>
        {horoscopeOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white border rounded-md shadow-md z-1">
            {['Daily', 'Weekly', 'Monthly'].map((category, index) => (
              <div key={index} className="relative">
                <button
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => setSubMenuOpen(subMenuOpen === category ? null : category)}
                >
                  {category} ▼
                </button>
                {subMenuOpen === category && (
                  <div className="absolute left-full top-0 mt-0 w-48 bg-white border rounded-md shadow-md">
                    {['Aries', 'Taurus', 'Gemini'].map((sign, i) => (
                      <div key={i} className="relative">
                        <button
                          className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                        >
                          {sign} ➤
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
      <Link href="/reports">Reports</Link>
      <Link href="/store">Store</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/celebrity">Celebrity</Link>
      <Link href="/join-us">Join Us</Link>
    </div>
  );
}