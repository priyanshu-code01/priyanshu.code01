import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-6 sm:px-10 md:px-[12%] py-20 bg-[#030712] text-white overflow-x-hidden relative'>

      {/* --- Background Glows --- */}
      <div className="absolute bottom-30 left-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* --- Main Content Wrapper */}
      <div className="relative z-10">
          
          <div className='text-center mb-16'>
            <h4 className='text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'>Introduction</h4>
            <h2 className='text-4xl md:text-5xl font-bold font-Ovo bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent'>
              About Me
            </h2>
          </div>

          <div className='flex w-full flex-col lg:flex-row items-center gap-12 lg:gap-20 my-10'>

            {/* Left Side: Profile Image */}
            <div className='relative group'>
              <div className='absolute inset-0 bg-amber-500/20 blur-3xl rounded-full'></div>
              <div className='relative w-64 sm:w-60 rounded-3xl overflow-hidden border-2 border-white/10'>
                <Image src={assets.user_image} alt='user' className='w-full h-auto' />
              </div>
              <div className='absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-500/30 rounded-3xl -z-10'></div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 w-full">
              <p className='mb-10 w-full text-gray-400 leading-relaxed text-base md:text-lg text-center md:text-left'>
                I am a dedicated <span className='text-white font-medium'>Frontend Developer</span> with a strong foundation in building modern, responsive web applications. With a deep focus on <span className='text-amber-400'>React.js and Tailwind CSS</span>, I transform creative concepts into seamless digital experiences. I am eager to leverage my skills in a professional environment, contributing to innovative projects and organizational growth.
              </p>

              <ul className='grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6 w-full'>
                {infoList.map(({ iconDark, title, description }, index) => (
                  <li
                    key={index}
                    className='bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-300 group
                               hover:bg-white/10 hover:border-amber-500/50 hover:-translate-y-2
                               max-md:bg-white/10 max-md:border-amber-500/50'
                  >
                    <div className='bg-amber-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4 
                                    group-hover:bg-amber-500 max-md:bg-amber-500'>
                      <Image src={iconDark} alt={title} className='w-6 invert group-hover:invert-0 max-md:invert-0' />
                    </div>
                    <h3 className='mb-2 font-bold text-white text-lg'>{title}</h3>
                    <p className='text-gray-400 text-sm leading-relaxed'>{description}</p>
                  </li>
                ))}
              </ul>

              <div className='mt-12 text-center md:text-left'>
                <h4 className='mb-6 text-gray-400 uppercase tracking-widest text-xs font-semibold'>Tools I excel in</h4>
                <ul className='flex flex-wrap justify-center md:justify-start items-center gap-4'>
                  {toolsData.map((tool, index) => (
                    <li key={index} className='flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-xl max-md:border-amber-500/50'>
                      <Image src={tool} alt='Tool' className='w-6 md:w-7 opacity-70 max-md:opacity-100' />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default About