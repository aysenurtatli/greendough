import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router';
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { navLinks } from '../Navbar/navLinks';

function Footer() {

    return (
        <footer className='bg-[#CCE0A9]'>
            <div className='container flex flex-col justify-center items-center h-[400px] md:h-[250px] mx-auto gap-10'>
                <div className='flex w-full  justify-center items-center'>
                    <ul className='flex flex-col w-full justify-center gap-20  md:flex-row items-center text-sm text-center text-[#644b32]'>
                        {navLinks.map((link, index) => (
                            <li key={index}><Link to={link.to}>{link.tag}</Link></li>
                        ))}
                    </ul>
                </div>

                <div className='flex items-center gap-10'>
                    <img src={logo} alt="logo" className='w-[80px] md:w-[100px]' />
                    <ul className='flex items-center text-[#0f4831] gap-10 text-xl md:text-2xl'>
                        <li className='bg-[#FDF5F0] border-2 shadow-lg shadow-[#afc79b] border-white rounded-full w-8 h-8 md:w-10 md:h-10  flex items-center justify-center'><a href="#"><FaInstagram /></a></li>
                        <li className='bg-[#FDF5F0] border-2 shadow-lg shadow-[#afc79b] border-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center'><a href="#"><FaFacebook /></a></li>
                        <li className='bg-[#FDF5F0] border-2 shadow-lg shadow-[#afc79b] border-white rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center'><a href="#"><FaXTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer