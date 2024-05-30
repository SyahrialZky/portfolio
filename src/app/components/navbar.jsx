'use client';

import React, { useState } from 'react'
import Link from 'next/link'
import NavList from './navlist'
import MenuOverlay from './menuOverlay';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"

const navLinks = [
    {
        title : 'About',
        path : '#about'
    },
    {
        title : 'Project',
        path : '#project'
    },
    {
        title : 'Contact',
        path : '#contact'
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return(
       <nav className='fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-4'>
            <Link className='text-2xl md:text-4xl text-white font-semibold' href={'/'}>RIAL</Link>
            <div className='mobile-menu block md:hidden'>
                {!navbarOpen ? (
                        <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white '>
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
            </div>
            <div className='menu hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 md:flex-row space-x-8 mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <NavList href={link.path} title={link.title} />
                        </li>
                    )
                )}      
                </ul>
            </div>
        </div>
        {navbarOpen  ? <MenuOverlay navLinks={navLinks}/> : null}

       </nav>
    )
}

export default Navbar