import type { Metadata } from 'next'
import { Epilogue } from 'next/font/google'
import '../globals.css'
import Image from 'next/image'
import pattern from '../../public/images/pattern.png'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import AuthProvider from '@/provider/AuthProvider'

const epilogue = Epilogue({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <AuthProvider>

          <Navbar/>
          <main>
              
            {children}
          
          </main>
          <Footer/>

        </AuthProvider>
      </body>
    </html>
  )
}
