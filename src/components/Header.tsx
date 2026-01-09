"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";
import IconButton from "./IconButton";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; }
  }, [isMenuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsMenuOpen(false); };
    if (isMenuOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  return (
    <header className="bg-[var(--bg-header)] text-text w-full mx-auto grid grid-cols-2 md:grid-cols-3 py-4 px-4 md:px-10 relative md:align-middle border-b border-[var(--border-header)] sticky top-0 z-40">
      <nav className="hidden md:flex items-center gap-6">
        <div className="max-h-max flex items-center justify-center">
          <div className="relative text-text hover:text-rose-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-rose-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-rose-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <Link href="/">Home</Link>
          </div>
        </div>
        <div className="max-h-max flex items-center justify-center">
          <div className="relative text-text hover:text-rose-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-rose-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-rose-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <Link href="/categories">Categories</Link>
          </div>
        </div>
        <div className="max-h-max flex items-center justify-center">
          <div className="relative text-text hover:text-rose-600 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-rose-600 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-rose-600 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
            <Link href="/favourites">Favourites</Link>
          </div>
        </div>
      </nav>

      <h1 className="max-w-max md:max-w-full md:text-center"><Link href="/" className="text-[var(--brand-title)] text-xl leading-[2] md:text-2xl font-bold hover:text-rose-600">Recipe Finder</Link></h1>

      <div className="hidden md:flex justify-end items-center">
        <SearchBar />
        <ThemeToggle />
      </div>

      <div className="flex justify-end md:hidden">  
        <IconButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {!isMenuOpen && (
            <Menu />
          )}
        </IconButton>
      </div>

      {isMenuOpen && (
        <div role="dialog" aria-modal="true" className="bg-[var(--bg-body)] fixed inset-0 z-50 flex flex-col">
          <div className="bg-[var(--bg-header)] grid grid-cols-2 py-4 px-4 border-b border-[var(--border-header)]">
            <h1><Link href="/" className="text-[var(--brand-title)] text-xl leading-[2] font-bold hover:text-rose-600">Recipe Finder</Link></h1>
            <div className="flex justify-end">
              <IconButton onClick={() => setIsMenuOpen(false)}>
                <X />
              </IconButton>
            </div>
          </div>

          <div className="bg-[var(--bg-body)] pt-10 pr-4 pb-4 pl-4">
            <div className="mb-6 pb-4 flex justify-between">
              <SearchBar className="max-w" />
              <ThemeToggle />
            </div>

            <nav className="flex flex-col gap-6 text-base">
              <ul>
                <li className="border-b p-4">
                  <Link href="/" onClick={() => setIsMenuOpen(false)} className=" hover:text-rose-600">HOME</Link>
                </li>
                <li className="border-b p-4">
                  <Link href="/categories" onClick={() => setIsMenuOpen(false)} className=" hover:text-rose-600">CATEGORIES</Link>
                </li>
              </ul>
            </nav>
          </div>

        </div>
      )}

    </header>
  );
}
