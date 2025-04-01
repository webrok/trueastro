'use client';

import { useState } from 'react';
import { FaGlobe } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center text-purple-600 text-xl font-bold">
          <span className="mr-1">🪐</span> 91Astrology ✨
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-black font-medium">
          <Link href="/horoscope">Horoscope</Link>
          <Link href="/reports">Reports</Link>
          <Link href="/store">Store</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/celebrity">Celebrity</Link>
          <Link href="/join-us">Join Us</Link>
        </div>

        {/* Language Selector & Login */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <div className="relative">
            <button
              className="flex items-center border px-2 py-1 rounded-md"
              onClick={() => setLangOpen(!langOpen)}
            >
              <FaGlobe className="mr-1" /> {language} ▼
            </button>
            {langOpen && (
              <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-md">
                {["English", "Hindi", "தமிழ்"].map((lang) => (
                  <button
                    key={lang}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    onClick={() => { setLanguage(lang); setLangOpen(false); }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full">Login</button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-white shadow-md py-4">
          {["Horoscope", "Reports", "Store", "Blogs", "Celebrity", "Join Us"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase().replace(/\s/g, "-")}`} onClick={closeMenu}>
              {item}
            </Link>
          ))}
          <button className="bg-purple-500 text-white px-4 py-2 rounded-full" onClick={closeMenu}>
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
