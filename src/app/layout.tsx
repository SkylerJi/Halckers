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
       <Navbar />
          
        </div>
        
          {children}
        </main>
      </body>

  
    
    </html>
  )
}
