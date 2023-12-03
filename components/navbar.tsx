"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust these values as needed
      const maxScrollValue = 200; // The scroll value at which the navbar reaches its minimum opacity
      const minOpacity = 0.6; // The minimum opacity value for the navbar

      const newOpacity = Math.max(minOpacity, 1 - window.scrollY / maxScrollValue);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='fixed top-0 bg-white w-full z-50 shadow-2xl' style={{ opacity }}>
      <nav className="flex justify-between items-center bg-white p-4 w-full">
        <Link href="/" passHref>
          <span className="text-xl font-bold cursor-pointer">Halckers</span>
        </Link>
        <div className="flex justify-end space-x-16 mx-16 flex-grow">
          <Link href="/mission" passHref>
            <span className="text-lg cursor-pointer">Mission</span>
          </Link>
          <Link href="/team" passHref>
            <span className="text-lg cursor-pointer">Team</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
