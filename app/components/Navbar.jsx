'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Navbar = () => {

    const [isScroll, setIsScroll] = useState(false);
    const [isThemeIconAnimating, setIsThemeIconAnimating] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)';
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)';
    }

    const toggleTheme = () => {
        const html = document.documentElement;
        const isDark = html.dataset.theme === 'dark';
        const nextTheme = isDark ? 'light' : 'dark';
        html.classList.add('theme-transitioning');
        html.dataset.theme = nextTheme;
        html.classList.toggle('dark', nextTheme === 'dark');
        localStorage.setItem('theme', nextTheme);
        setIsThemeIconAnimating(true);
        window.setTimeout(() => html.classList.remove('theme-transitioning'), 560);
        window.setTimeout(() => setIsThemeIconAnimating(false), 220);
    }

    useEffect(() => {
        const html = document.documentElement;
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
        html.dataset.theme = shouldUseDark ? 'dark' : 'light';
        html.classList.toggle('dark', shouldUseDark);
    }, []);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    },[])

  return (
    <>

    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt="" className='w-full'></Image>
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? 'bg-white/50 dark:bg-black/70 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <a href="#top">
            <h3 className='cursor-pointer me-8 text-2xl md:text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white'>Jageshwar</h3>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:bg-[#1a1a1a]/80'}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#work">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
        
        <button onClick={toggleTheme}>
            <Image src={assets.moon_icon} alt='theme toggle' className={`w-6 dark:hidden transition-all duration-200 ease-out ${isThemeIconAnimating ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}></Image>
            <Image src={assets.sun_icon} alt='theme toggle' className={`w-6 hidden dark:block transition-all duration-200 ease-out ${isThemeIconAnimating ? 'scale-75 opacity-50' : 'scale-100 opacity-100'}`}></Image>
        </button>
       
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact <Image src={assets.arrow_icon} alt="" className='w-3 dark:hidden'></Image><Image src={assets.arrow_icon_dark} alt="" className='w-3 hidden dark:block'></Image></a>

        <button className='block md:hidden ml-3' onClick={openMenu}>
            <Image src={assets.menu_black} alt='' className='w-6 dark:hidden'></Image>
            <Image src={assets.menu_white} alt='' className='w-6 hidden dark:block'></Image>
        </button>

        </div>

        {/* Mobile Menu - to be implemented */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 dark:bg-[#1f1f1f] transition duration-500'>
            <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={assets.close_black} alt="" className='w-5 cursor-pointer dark:hidden'></Image>
                <Image src={assets.close_white} alt="" className='w-5 cursor-pointer hidden dark:block'></Image>
            </div>

            <li><a onClick={closeMenu} href="#home">Home</a></li>
            <li><a onClick={closeMenu} href="#about">About</a></li>
            <li><a onClick={closeMenu} href="#services">Services</a></li>
            <li><a onClick={closeMenu} href="#work">Projects</a></li>
            <li><a onClick={closeMenu} href="#contact">Contact</a></li>
        </ul>

    </nav>
    </>
  )
}

export default Navbar
