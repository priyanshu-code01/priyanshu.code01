import { useRef } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16.5rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16.5rem)";
  };

  return (
    <header className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-center">
      
      {/* Background Image */}
      <Image
        src={assets.header_bg_color}
        alt="header background"
        fill
        priority
        className="object-cover -z-10 opacity-90"
      />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full px-5 lg:px-12 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} className="w-28 cursor-pointer" alt="Logo" />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 bg-white/10 px-8 py-3 rounded-full backdrop-blur-md border border-white/10 shadow-sm">
          <li><a className="text-white/90 hover:text-amber-400 font-medium transition-all" href="#top">Home</a></li>
          <li><a className="text-white/90 hover:text-amber-400 font-medium transition-all" href="#about">About</a></li>
          <li><a className="text-white/90 hover:text-amber-400 font-medium transition-all" href="#skills">Skills</a></li>
          <li><a className="text-white/90 hover:text-amber-400 font-medium transition-all" href="#work">Project</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all font-medium"
          >
            Connect
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          {/* Menu Button for Mobile */}
          <button onClick={openMenu} className="block md:hidden p-2">
            <Image src={assets.menu} alt="menu" className="w-8" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-10 px-10 fixed -right-64 top-3 w-64 z-50 h-min rounded-2xl bg-white/20 border-white/70 border backdrop-blur-2xl transition duration-500 shadow-2xl"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer p-2 bg-gray rounded-full">
            <Image src={assets.close} alt="close" className="w-4" />
          </div>

          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#top">Home</a></li>
          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#about">About me</a></li>
          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#services">Services</a></li>
          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#skills">Skills</a></li>
          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#work">My Work</a></li>
          <li><a onClick={closeMenu} className="text-lg text-amber-400 hover:text-amber-700" href="#contact">Contact me</a></li>
        </ul>
      </nav>

      {/* --- MAIN CONTENT */}
      <main className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 pt-24 md:pt-0">
        
        {/* Left Content Section */}
        <section className="text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
          
          {/* Subheading */}
          <h3 className="flex items-center gap-2 text-lg md:text-2xl text-gray-200 font-Ovo mb-2">
            Hi! <Image src={assets.hand_icon} alt="namaste" className="w-6 animate-bounce" /> I'm 
            <span className="text-amber-400 font-semibold">Priyanshu Singh</span>
          </h3>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-Ovo">
            Frontend Developer | <br />
            <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Focused on React.js
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-lg">
            Aspiring Frontend Developer based in India, specializing in building
            scalable applications with React, Tailwind, and JavaScript.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <a
              href="/resume.pdf"
              download
              className="px-8 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-all w-full sm:w-auto flex justify-center items-center gap-2"
            >
              My resume
              <Image src={assets.download_icon} alt="resume" className="w-4 invert" />
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto flex justify-center items-center gap-2"
            >
              Contact me
              <Image src={assets.right_arrow} alt="contact" className="w-4" />
            </a>
          </div>
        </section>

        {/* Right Image Section */}
        <section className="relative group">
           {/* Background Glow Effect */}
          <div className="absolute inset-0 bg-amber-500/30 blur-[60px] rounded-full group-hover:bg-amber-500/40 transition-all duration-500"></div>

          {/* Image Container with Border */}
          <div className="relative z-10 p-2 rounded-full border-2 border-amber-500/50">
            <Image
              src={assets.profile_img}
              alt="Priyanshu Singh"
              priority
              className="rounded-full w-56 sm:w-72 md:w-80 lg:w-md object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </div>
        </section>

      </main>
    </header>
  );
};

export default Header;