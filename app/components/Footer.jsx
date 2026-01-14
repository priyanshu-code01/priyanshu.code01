import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full px-[10%] py-10 bg-[#030712] relative overflow-hidden'>
            
            {/* --- Background Glows --- */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* --- Main Content (z-10 for visibility) --- */}
            <div className='relative z-10'>
                <div className='text-center'>
                    
                    {/* Logo */}
                    <span className="text-4xl tracking-tighter font-Kaushan_Script text-white">
                        Priyanshu<span className="text-amber-500">.</span>
                    </span>

                    {/* Email Section */}
                    <div className='w-max flex items-center gap-2 mx-auto mt-6 text-gray-300'>
                        <Image src={assets.mail_icon} alt='email' className='w-5 invert opacity-80' />
                        priyanshu.code01@gmail.com
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className='text-center sm:flex items-center justify-between border-t border-white/10 mt-12 py-6'>
                    <p className='text-gray-500 text-sm'>
                        &copy; 2026 Priyanshu Singh. All rights reserved.
                    </p>
                    
                    {/* Social Links */}
                    <ul className='flex items-center gap-8 justify-center mt-4 sm:mt-0'>
                        <li>
                            <a href="https://www.linkedin.com/in/priyanshu-singh-b2453a388" target='_blank' rel="noreferrer" className='text-gray-400 hover:text-amber-500 transition-colors duration-300'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/priyanshu-code01" target='_blank' rel="noreferrer" className='text-gray-400 hover:text-amber-500 transition-colors duration-300'>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/priyanshusingh_18/" target='_blank' rel='noreferrer' className='text-gray-400 hover:text-amber-500 transition-colors duration-300'>
                                Instagram
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer