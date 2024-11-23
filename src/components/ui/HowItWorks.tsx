import { HOW_IT_WORKS } from '@/constants'
import { CircleCheckBig } from 'lucide-react';
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='container mx-auto my-10 border-b pd-10'>
        <h2 className='text-center text-3xl tracking-tighter sm:text-4xl lg:text-5xl'>
            {HOW_IT_WORKS.title}
        </h2>
        <p className='mx-auto my-10 max-w-4xl  text-center text-neutral-800'>{HOW_IT_WORKS.content}</p>
        <div className='works relative h-[640px] rounded-xl'>
            
                
                
                </div>
        </div>
    
)}

export default HowItWorks;