import Image from 'next/image'
import React from 'react'
import { assets } from '@/assets/assets'
import { skillData } from '@/assets/skillData'

const Skills = () => {
  return (
    <div id='skills' className='w-full px-6 md:px-[12%] py-20 bg-[#030712] text-white relative overflow-hidden'>

      {/* --- Background Glows --- */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* --- Main Content (z-10) --- */}
      <div className="relative z-10">

        {/* Header */}
        <div className='text-center mb-16'>
          <h4 className='text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'>
            My Expertise
          </h4>
          <h2 className='text-4xl md:text-5xl font-bold font-Ovo bg-linear-to-r from-white to-gray-500 bg-clip-text text-transparent'>
            Technical Skills
          </h2>
          <p className='text-center max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed font-Ovo'>
            I specialize in building responsive, high-performance web applications using the latest modern technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8'>
          {skillData.map((skill, index) => (
            <div
              key={index}
              className='group flex flex-col justify-between p-6 bg-white/5 border border-white/10 rounded-2xl 
                    hover:bg-white/10 hover:border-amber-500/50 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-amber-500/10 h-full'
            >
              {/* Top Section: Icon & Name */}
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-12 h-12 flex items-center justify-center bg-black/50 rounded-xl border border-white/5 group-hover:border-amber-500/30 transition-colors'>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className='w-7 h-7 object-contain transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                <div>
                  <h3 className='font-Ovo font-medium text-gray-200 group-hover:text-white transition-colors text-lg'>
                    {skill.name}
                  </h3>
                </div>
              </div>

              {/* Progress Bar Section */}
              <div className='w-full'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-xs text-gray-400 font-medium'>Proficiency</span>
                  <span className='text-xs text-amber-500 font-bold'>{skill.level}%</span>
                </div>

                {/* Bar Container */}
                <div className='w-full h-2 bg-white/10 rounded-full overflow-hidden'>
                  {/* Animated Fill Bar */}
                  <div
                    className='h-full bg-linear-to-r from-amber-400 to-orange-600 rounded-full group-hover:shadow-[0_0_10px_#f59e0b] transition-all duration-1000 ease-out'
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Skills