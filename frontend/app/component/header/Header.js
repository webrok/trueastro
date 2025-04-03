// Header.jsx
'use client';

import { useState } from 'react';
import "./Header.css";
import Link from 'next/link';
import NavMenu from './Navbar';
import LogoLanguage from './LogoLanguage';
import { HiMenu, HiX } from 'react-icons/hi';
import LoginLanguage from './LoginLanguage';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('English');

  const closeMenu = () => setIsOpen(false);
  
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo and Language Component */}
        <LogoLanguage language={language} setLanguage={setLanguage} />
        
        {/* Desktop Menu Component */}
        <div className="hidden md:flex">
          <NavMenu />
        </div>

        {/* Login Button */}
        
        <LoginLanguage language={language} setLanguage={setLanguage} />

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
          {['Horoscope', 'Reports', 'Store', 'Blogs', 'Celebrity', 'Join Us'].map((item) => (
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