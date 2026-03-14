'use client';

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-border-line">
        <div className="max-w-7xl mx-auto px-4 h-20 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-primary flex items-center gap-2"
          >
            🇰🇷 KNC
          </Link>


          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <button className="p-2 hover:bg-bg-light rounded-lg">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button className="px-4 py-2 text-primary border border-primary rounded-lg hover:bg-primary hover:text-white">
              로그인
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
              회원가입
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border-line">
            <nav className="flex flex-col p-4 gap-4">
              <div className="flex gap-2 mt-4">
                <button className="flex-1 px-4 py-2 text-primary border border-primary rounded-lg">
                  로그인
                </button>
                <button className="flex-1 px-4 py-2 bg-primary text-white rounded-lg">
                  회원가입
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
