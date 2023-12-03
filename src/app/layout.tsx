import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../../components/navbar'
import Link from 'next/link'
import HackedText from '../../components/HackedText'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Halckers LLC',
  description: 'It Halcking time',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  
  return (
    <html lang="en">
         <body className={inter.className}>
    
        <main>
        <div className='fixed top-0 bg-white w-full z-50 shadow-2xl'>
          <nav className="flex justify-between items-center bg-white p-4 w-full">
            <div>
            <Link href="/" passHref>
              <HackedText />
            </Link>

            </div>
            
            <div className="flex justify-end space-x-8 md:space-x-16 ml-12 mr-16 flex-grow">
              <Link href="/mission" passHref>
                <span className="text-lg cursor-pointer font-mono">Mission</span>
              </Link>
              <Link href="/team" passHref>
                <span className="text-lg cursor-pointer font-mono">Team</span>
              </Link>
            </div>
          </nav>
        </div>
          {children}
        </main>
      </body>

  
    
    </html>
  )
}
