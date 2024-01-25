import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

type BannerSignupProps = {}

export default function BannerSignup({}: BannerSignupProps) {
  return (
    <div className='mt-32 mb-10 bg-primary text-primary-foreground px-16 pt-16 flex flex-row justify-between items-center'>
        <div>
            <div className='text-5xl font font-semibold'>
                Start posting <br/> jobs today
            </div>
            <div className='my-6'>Start posting job for only $10</div>
            <Button size='lg' variant='secondary'>Sign Up for free</Button>

        </div>
        <div>
            <Image src='/images/dashboard.png' alt='dashoboard'  width={500} height={350}/>
        </div>

    </div>
  )
}