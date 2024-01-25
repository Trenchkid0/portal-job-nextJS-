import Image from 'next/image'
import React from 'react'

type ClientsProps = {}

const clients = [
    '/images/jobox.png',
    '/images/dsign.png',
    '/images/wave.png',
    '/images/twins.png',
    '/images/bubles.png',
]

export default function Clients({}: ClientsProps) {
  return (
    <div className='relative z-10'>
        <div className='text-lg text-muted-foreground'>
            Companies we helped grow
        </div>
        <div className='mt-8 flex flex-row justify-between'>
            {clients.map((item:string,index:number) => (
                <Image key={index}  src={item} alt={item} width={139} height={35} />
            ))}
        </div>
        
    </div>
  )
}