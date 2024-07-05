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
    <nav className={`flex justify-around w-full `}>
      <div>
        hi
      </div>
      <div>
        Test
      </div>
      {/* <div className="">
        <Link href="/">
          <HackedText />
        </Link>
      </div>
      
      <div className="flex space-x-4 md:space-x-16 ml-16 mr-16 ">
        <Link href="/mission" passHref>
          <span className="text-lg cursor-pointer font-mono hover:text-red-500 expanding-underline">
            Mission 
            
          </span>
        </Link>
        <Link href="/team" passHref>
          <span className="text-lg cursor-pointer font-mono hover:text-red-500 expanding-underline">
            Team

          </span>
        </Link>
      </div> */}
    </nav>
  );
}