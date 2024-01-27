import Image from 'next/image'
import React from 'react'
import logo from '../../../../public/images/logo2.png'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type NavbarProps = {}

export default function Navbar({}: NavbarProps) {
  return (
    <header className='px-32 py-5 flex flex-row items-start justify-between'>
        <div className='inline-flex items-center gap-12'>
            <div>
                <Image src={logo} alt='logo' width={160} height={36} />
            </div>
            <div>
                <Link href='/find-jobs' className='font-medium text-gray-400 mr-4 cursor-pointer'>Find Jobs</Link>
                <Link href='/find-companies' className='font-medium text-gray-400 cursor-pointer'>Browse Company</Link>
            </div>
        </div>
        <div className='inline-flex items-center gap-4 h-8'>
            <Button variant='link'>Login</Button>
            <Button>Sign Up</Button>
        </div>
    </header>
  )
}