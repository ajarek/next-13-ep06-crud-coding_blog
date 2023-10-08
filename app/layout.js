import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Coding blog ',
  description: 'CRUD Operations Using Next.js 13 & MongoDB',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className='max-w-7xl  mx-auto '>
        <Navbar/>
        {children}
        </div>
        </body>
    </html>
  )
}
