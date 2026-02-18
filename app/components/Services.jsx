import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>What I Know</h4>
      <h2 className='text-center text-5xl'>My Skills & Focus Areas</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-white/85'>
        My core skill set includes building modern, responsive applications using React, Next.js, and TypeScript, developing scalable backends with Node.js and Express.js, working with MongoDB and MySQL databases, and implementing secure authentication, REST APIs, and real-time features. I focus on writing clean, maintainable code and continuously improving my problem‑solving and development skills.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index) => (
            <div key={index} className='border border-gray-400 dark:border-white/30 rounded-lg px-6 py-8 sm:px-8 sm:py-12 hover:shadow-black cursor-pointer hover:bg-pink-100 dark:hover:bg-[#2a2a2a] hover:shadow-[6px_6px_15px_rgba(0,0,0,0.50)] dark:hover:shadow-[6px_6px_15px_rgba(255,255,255,0.10)] hover:-translate-y-2 transform-gpu transition-transform duration-800 ease-[cubic-bezier(0.25,0.8,0.25,1)] will-change-transform'>
                <Image src={icon} alt='' className='w-8 sm:w-10'></Image>
                <h3 className='text-base sm:text-lg my-3 sm:my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 dark:text-white/80 leading-6'>{description}</p>
                
            </div>
        ))}
      </div>


    </div>
  )
}

export default Services
