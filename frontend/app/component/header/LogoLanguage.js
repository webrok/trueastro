// LogoLanguage.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LogoLanguage() {

  return (
    <div className="flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center text-purple-600 text-xl font-bold">
        <span className="mr-1">🪐</span> True Astro ✨
      </Link>
      
    </div>
  );
}