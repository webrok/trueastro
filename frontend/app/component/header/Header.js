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
        <NavMenu />

        {/* Login Button */}
        
        <LoginLanguage language={language} setLanguage={setLanguage} />

      
      </div>

    </nav>
  );
}