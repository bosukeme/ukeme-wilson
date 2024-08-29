'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu } from "react-icons/rx";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Skills', path: '/skills' },
    { label: 'Medium', path: '/medium' },
    { label: 'Projects', path: '/projects' },
    { label: 'Resume', path: 'https://docs.google.com/document/d/1J4pU5xgYkvgDAegLL434cntEa6cQKl4x/edit?usp=sharing&ouid=104805344687299651871&rtpof=true&sd=true' },
    { label: 'Poems', path: 'https://ukemewilson.blogspot.com/' },
    { label: 'Quiz', path: '/quiz' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const size = "34px";

  return (
    <header className="bg-transparent sticky top-0 z-50">
      {/* mx-auto */}
      <div className={`w-screen ml-8 mr-16 flex justify-between  items-center pr-16 pl-4 lg:pr-16 lg:pl-8`}>
        {/* Logo */}
        <div className={`flex items-start `}>
          <Link href="/">
          
            <Image 
              src="/logo.jpeg"
              alt="Logo Image"
              height={100}
              width={100}
              priority
            />

          </Link>
          
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            item.path.startsWith('http') ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer" // Added for security reasons
                className="text-black hover:text-gray-700"
              >
                <div className="flex flex-col items-center">
                  <h3 className='dark:text-white'>{item.label}</h3>
                  <hr className="w-full mt-1 h-1 bg-black dark:bg-white" />
                </div>
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                className="text-black hover:text-gray-700"
              >
                <div className="flex flex-col items-center">
                  <h3 className='dark:text-white'>{item.label}</h3>
                  <hr className="w-full mt-1 h-1 bg-black dark:bg-white" />
                </div>
              </Link>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={handleDrawerToggle}
        >
          <RxHamburgerMenu size={size} />
          
        </button>
      </div>

      {/* Mobile Drawer */}
      <nav
        className={`fixed inset-y-0 left-0 bg-[#c3eff8] dark:bg-zinc-700 shadow-lg transition-transform duration-300 ease-in-out transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden w-60 `}
      >
        <div className="flex flex-col items-center  mt-20">
          {navItems.map((item) => (
            item.path.startsWith('http') ? (
              <a
                key={item.label}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer" // Added for security reasons
                className="text-black dark:text-white hover:bg-sky-500 hover:text-gray-700 my-3"
                onClick={handleDrawerToggle} // Close drawer on link click
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.label}
                href={item.path}
                className="text-black dark:text-white hover:bg-sky-500 hover:text-gray-700 my-3"
                onClick={handleDrawerToggle} // Close drawer on link click
              >
                {item.label}
              </Link>
            )
          ))}
        </div>
      </nav>
    </header>
  );
}
