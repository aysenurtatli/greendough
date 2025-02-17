import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navLinks } from '../Navbar/navLinks';

function Footer() {

    return (
        <footer className='bg-[#CCE0A9]'>
            <div className='container flex flex-col justify-center items-center py-[5rem] mx-auto'>
                <div className='flex w-full  justify-center items-center'>
                    <ul className='flex flex-col w-full justify-center gap-20 md:flex-row items-center text-center'>
                        {navLinks.map((link) => (
                            <li><Link>{link.tag}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center m-10 gap-10'>
                    <img src={logo} alt="logo" className='w-[100px]' />
                    <ul className='flex items-center text-[#0f4831] gap-10 text-2xl'>
                        <li><a href="#"><FaInstagram /></a></li>
                        <li><a href="#"><FaFacebook /></a></li>
                        <li><a href="#"><FaXTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer