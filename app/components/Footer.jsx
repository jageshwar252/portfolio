import { assets } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        
        <div className='w-max flex items-center gap-2 mx-auto'>
         <Image src={assets.mail_icon} alt="Mail Icon" className='w-6 dark:hidden'/>
         <Image src={assets.mail_icon_dark} alt="Mail Icon" className='w-6 hidden dark:block'/>
         jageshwarkumar252@gmail.com
      </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 dark:border-white/30 mx-[10%] mt-12 py-6'>
        <p>2025 Jageshwar Kumar. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="https://github.com/jageshwar252">GitHub</a></li>
            <li><a target='_blank' href="https://linkedin.com/in/jageshwar-kumar252">LinkedIn</a></li>
            <li><a target='_blank' href="https://twitter.com/jageshwarK12237">Twitter</a></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Footer
