"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import HackedText from '../HackedText';
import Link from 'next/link';

export default function Footer() {
    const pathname = usePathname();

    // If the current path is '/mission', don't render the footer
    if (pathname === '/mission') {
        return null;
    }

    return (
        <footer className="w-full p-8" style={{height: "20vh"}}>
            <div className="flex flex-col md:flex-row w-full justify-between h-full">
                <div className="logo mb-4 md:mb-0">
                    <HackedText />
                </div>
                
                <div className="contact-info text-start md:text-left mb-4 md:mb-0">
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p>Email: skylerji@gmail.com</p>
                    <p>Phone: (636) 368-7576</p>
                    <p>Address: Nunya</p>
                </div>
                <div className="contact-info flex flex-col text-start md:text-left mb-4 md:mb-0 ">
                    <h3 className="font-bold mb-2">Services</h3>
                    <div  className = "hover:text-neutral-500">
                    <Link href= "https://www.shaneliu.net/">
                        Engineering
                    </Link>

                    </div>
                    <div  className = "hover:text-neutral-500">
                    <Link href= "https://buy.stripe.com/7sI7wd29Y6PT5Es4gj">
                        Finance
                    </Link>

                </div>
                   
                </div>
                
                <div className="copyright text-sm text-gray-500 items-end">
                    © {new Date().getFullYear()} Halckers LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}