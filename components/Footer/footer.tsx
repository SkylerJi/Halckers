import React from 'react';
import HackedText from '../HackedText';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full bg-white z-10 p-8" style={{height: "20vh"}}>
            <div className="flex w-full justify-between  h-full">
                <div className="logo mb-4 md:mb-0">
                    {/* Replace with your actual logo */}
                   <HackedText />
                </div>
                
                <div className="contact-info text-start md:text-left mb-4 md:mb-0">
                    <h3 className="font-bold mb-2">Contact Us</h3>
                    <p>Email: skylerji@gmail.com</p>
                    <p>Phone: (636) 368-7576</p>
                    <p>Address: Nunya</p>
                </div>
                <div className="contact-info flex flex-col text-start md:text-left mb-4 md:mb-0 hover:text-neutral-500">
                    <h3 className="font-bold mb-2">Services</h3>
                    <Link href= "https://www.shaneliu.net/">
                        Engineering
                    </Link>
                    <Link href= "https://buy.stripe.com/7sI7wd29Y6PT5Es4gj" >
                        Finance
                    </Link>
                    
                </div>
                
                <div className="copyright text-sm text-gray-500 items-end">
                    © {new Date().getFullYear()} Halckers LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}