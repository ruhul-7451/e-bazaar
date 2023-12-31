import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Bazaar',
  description: 'A modern e-commerce app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className={'min-h-screen flex flex-col relative ' + inter.className}>
        <header className='sticky p-6 top-0 bg-white border-b border-solid border-blue-900 shadow-md  z-50 text-2xl sm:text-3xl md:text-4xl sm:p-8 flex item-center justify-between'>
          <Link href={'/'}>
            <h1 className='uppercase cursor-pointer hover:scale-110'>E-Bazaar</h1>
          </Link>
          <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-slate-500"></i>
        </header>
        <div className='flex-1'>
          {children}
        </div>
        <footer></footer>
      </body>
    </html>
  )
}
