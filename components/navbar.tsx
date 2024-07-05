"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import HackedText from './HackedText';

export default function Navbar() {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setVisible(false);
        } else { // if scroll up show the navbar
          setVisible(true);
        }

        // remember current page location to use in the next move
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav className={`flex justify-between items-center bg-white p-4 w-full fixed top-0 transition-transform duration-300 ${visible ? '' : 'opacity-0'}`}>
      <div>
        <Link href="/">
          <HackedText />
        </Link>
      </div>
      
      <div className="flex justify-end space-x-4 md:space-x-16 ml-16 mr-16 flex-grow">
        <Link href="/mission" passHref>
          <span className="text-lg cursor-pointer font-mono relative group">
            Mission
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Link href="/team" passHref>
          <span className="text-lg cursor-pointer font-mono relative group">
            Team
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
      </div>
    </nav>
  );
}