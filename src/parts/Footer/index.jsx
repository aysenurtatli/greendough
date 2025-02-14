import React from 'react'
import logo from '../../assets/images/logo.png'
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className='bg-[#CCE0A9]'>
            <div className='container flex items-center justify-between p-8 mx-auto'>
                <img src={logo} alt="logo" className='w-[100px]' />
                <div className='text-stone-800'>
                    <ul className='flex items-center gap-5 text-2xl'>
                        <li><FaInstagram /></li>
                        <li><FaFacebook /></li>
                        <li><FaXTwitter /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer