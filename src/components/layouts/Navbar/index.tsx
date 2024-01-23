import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/logo2.png'
import { Button } from '@/components/ui/button'

type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  return (
    <header className='px-32 py-5 flex flex-row items-start justify-between'>
        <div className='inline-flex items-center gap-12'>
            <div>
                <Image src={logo} alt='logo' width={160} height={36} />
            </div>
            <div>
                <span className='font-medium text-gray-400 mr-4 cursor-pointer'>Find Jobs</span>
                <span className='font-medium text-gray-400 cursor-pointer'>Browse Company</span>
            </div>
        </div>
        <div className='inline-flex items-center gap-4 h-8'>
            <Button variant='link'>Login</Button>
            <Button>Sign Up</Button>
        </div>
    </header>
  )
}