import Image from 'next/image'
import React from 'react'
import pattern2 from '../../../../public/images/pattern2.png'
import hero from '../../../../public/images/hero.png'
import FormSearch from '../FormSearch'

type HeroProps = {}

export default function Hero({}: HeroProps) {
  return (
    <div className='flex flex-row justify-between items-center'>
        <div className='w-1/2'>
            <div className='text-7xl font-semibold text-slate-600 w-max relative'>
                Discover <br/>{" "}
                <span className='text-primary'>5000+ Jobs </span>
            </div>
            <Image src={pattern2} alt='pattern' width={455} height={32} className='mb-5'/>
            <div className='text-muted-foreground text-lg'>
                Great platform for the job seeker that searching for new career heights and passionate about startups.
            </div>
            <FormSearch/>
        </div>
        <div className='block mt-2'>
            <Image src={hero} alt='hero' width={501} height={710} objectFit='contain'/>
        </div>
    </div>
  )
}