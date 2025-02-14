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
        <nav className='container flex flex-wrap items-center justify-between p-8 mx-auto' id='navbar'>
            <Link to="/">
                <img src={logo} alt="logo" className='w-[150px]' />
            </Link>
            <button
                type='button'
                onClick={toggleMenu}
                className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm md:hidden'>
                <span className='sr-only'>Open Main Menu</span>
                <svg className='w-5 h-5' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div className={`${isMenuOpen ? 'block my-4' : 'hidden'} w-full md:block md:w-auto`}>
                <ul className='font-medium text-lg flex items-center flex-col gap-3 md:gap-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0'>
                    {navLinks.map((link, index) => (
                        <li key={index} className='text-stone-800 hover:text-[#FF9D67] duration-200'>
                            <Link to={link.to}>{link.tag}</Link>
                        </li>
                    ))}
                    <li className='bg-[#CCE0A9] hover:bg-[#FF9D67] duration-200 p-2 rounded-lg'>
                        <Link to="/contact">İletişim</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar