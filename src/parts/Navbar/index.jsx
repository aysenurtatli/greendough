import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from '../../assets/images/logo.png'
import { navLinks } from './navLinks'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className={`z-50 w-full container mx-auto bg-[#FDF5F0] border-5 shadow-lg shadow-[#e7dad2] border-white  p-2 px-4 my-5 ${isMenuOpen ? 'rounded-4xl md:rounded-full' : 'rounded-full'}`} id='navbar'>
            <div className='flex flex-wrap items-center justify-between'>
                <Link to="/">
                    <img src={logo} alt="logo" className='w-[100px] lg:w-[120px]' />
                </Link>
                <button
                    type='button'
                    onClick={toggleMenu}
                    className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden'>
                    <span className='sr-only'>Open Main Menu</span>
                    <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="#644b32" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMenuOpen ? 'block my-4' : 'hidden'} w-full md:block md:w-auto`}>
                    <ul className='text-[#644b32] font-medium text-lg flex items-center flex-col gap-3 md:gap-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0'>
                        {navLinks.filter((link) => link.tag !== "iletişim").map((link, index) => (
                            <li key={index} className='hover:bg-white p-2 rounded-full duration-200'>
                                <Link to={link.to}>{link.tag}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar