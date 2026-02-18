import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { workData } from '@/assets/assets'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
       <h4 className='text-center mb-2 text-lg'>My Portfolio</h4>
      <h2 className='text-center text-5xl'>My latest projects</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-700 dark:text-white/85'>
        Here are some of my recent projects that showcase my skills and experience as a Full Stack Developer. Each project demonstrates my ability to build practical and user-friendly web applications using the MERN stack, with a focus on clean code, solid backend logic, and responsive interfaces. I’m proud of these projects and the impact they have had, and I’m always looking for new opportunities to create innovative solutions that solve real problems.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">

        {workData.map((project, index)=>(

        <div
          key={index}
          className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group  transition-[transform,box-shadow] duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
        >
          <Image
            src={project.bgImage}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />

          <a href={project.link} className='bg-white dark:bg-[#1f1f1f] w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bottom-7'>


            <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700 dark:text-white/80'>{project.description}</p>
            </div>

            <div className='border rounded-full border-black dark:border-white w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#fff] bg-white dark:bg-black group-hover:bg-lime-300 dark:group-hover:bg-lime-400 transition-colors duration-300'>
                <Image src={assets.send_icon} alt='send icon' className='w-5 dark:invert'/>
            </div>

          
          </a>
        </div>
           
        ))}
      </div>
      <a href="https://github.com/jageshwar252" className='w-max flex items-center justify-center gap-2 text-gray-700 dark:text-white border-[0.5] border-gray-700 dark:border-white/60 rounded-full py-3 px-10 mx-auto my-20 hover:bg-pink-100 dark:hover:bg-[#2a2a2a] duration-500'>
        Show more <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4 dark:hidden'/>
        <Image src={assets.right_arrow_bold_dark} alt='right arrow' className='w-4 hidden dark:block'/>
      </a>
    </div>
  )
}

export default Work
