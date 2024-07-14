import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'

const Testimonials = () => {
  return (
    <div className="py-20" id="testimonials">
       <h1 className='text-center font-bold tracking-wider text-[2.7rem]'>
        What <span className="text-purple">USers</span> Say <span className="text-purple">About Us</span>
       </h1>
       <div className='flex flex-col items-center'>
          <InfiniteMovingCards 
          items={testimonials}
          direction='right'
          speed='slow'
          />
       </div>
    </div>
  )
}

export default Testimonials