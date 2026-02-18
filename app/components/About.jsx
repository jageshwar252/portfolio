import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg'>Introduction</h4>
      <h2 className='text-center text-5xl'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt="" className='w-full rounded-3xl'></Image>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl text-gray-700 dark:text-white/85'>I’m a Full Stack Developer from Lucknow, working with the MERN stack to build practical and user-friendly web applications.I have a strong foundation in both frontend and backend technologies, including React, Node.js, and MongoDB.</p>

            <ul className='grid grid-col-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li className='border-[0.5px] border-gray-400 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-pink-100 dark:hover:bg-[#2a2a2a] hover:-translate-y-1 duration-500 hover:shadow-[6px_6px_15px_rgba(0,0,0,0.50)] dark:hover:shadow-[6px_6px_15px_rgba(255,255,255,0.10)]'
                    key={index}>
                        <Image className='w-7 mt-3 dark:hidden' src={icon} alt={title}></Image>
                        <Image className='w-7 mt-3 hidden dark:block' src={iconDark} alt={title}></Image>
                        <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-gray-600 dark:text-white/80 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-6 text-gray-700 dark:text-white'>Tools I use</h4>

              <ul className='flex flex-wrap items-center gap-3 sm:gap-5 max-w-3xl'>
                {toolsData.map((tool, index) => (
                  <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-white/30 rounded-lg cursor-pointer hover:-translate-y-1 transition-transform duration-300 ease-out'
                  key={index}>
                    <Image src={tool} alt='tool icon' className='w-5 sm:w-7' />
                  </li>
                ))}
            </ul>

        </div>
      </div>
    </div>
  )
}

export default About
