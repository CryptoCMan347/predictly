"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';

/**
 * NavBar Component (with Auth Integration)
 * - Shows Sign In/Sign Up links if not logged in
 * - Shows user avatar and Log Out if logged in
 * - Responsive and accessible
 */
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/contest/1', label: 'Contests' },
  { href: '/leaderboard', label: 'Leaderboard' }
];

const NavBar: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();

  // Helper to check if a link is active
  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className="bg-black border-b border-gray-800 py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" className="text-2xl font-extrabold text-green-400 tracking-tight hover:text-green-300 transition">
          Predictly
        </Link>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-gray-200 text-3xl focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? '✖' : '☰'}
        </button>
        {/* Navigation Links */}
        <ul className={`flex-col md:flex-row md:flex gap-6 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${menuOpen ? 'flex' : 'hidden md:flex'}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-lg font-semibold transition px-2 py-1 rounded ${
                  isActive(link.href)
                    ? 'text-yellow-400 bg-gray-800 shadow'
                    : 'text-gray-200 hover:text-yellow-400'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          {/* Auth Links or User Avatar/Logout */}
          {!session ? (
            <>
              <li>
                <Link href="/auth/signin" className="text-lg text-green-400 font-bold hover:underline" onClick={() => setMenuOpen(false)}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/auth/signup" className="text-lg text-yellow-400 font-bold hover:underline" onClick={() => setMenuOpen(false)}>
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/my-credits" className="text-lg text-green-300 font-bold hover:underline px-2">
                  My Credits: {session.user.credits ?? 0}
                </Link>
              </li>
              <li className="ml-4">
                <Link 
                  href="/account"
                  className="block w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center text-xl text-green-300 border-2 border-green-500 shadow-inner hover:border-green-400 transition-colors"
                  title={session.user?.email || 'User Profile'}
                >
                  {/* User avatar or fallback icon */}
                  {session.user?.image ? (
                    <img src={session.user.image} alt="avatar" className="w-9 h-9 rounded-full" />
                  ) : (
                    <span role="img" aria-label="User">👤</span>
                  )}
                </Link>
              </li>
              <li>
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className="text-lg text-red-400 font-bold hover:underline ml-2"
                >
                  Log Out
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar; 