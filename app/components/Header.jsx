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
    <header className="relative h-full w-full overflow-x-hidden">
      {/* Background Image */}
      <Image
        src={assets.header_bg_color}
        loading="eager"
        alt="header background"
        fill
        priority
        className="object-cover -z-10"
      />

      {/* Navbar */}
      <nav className="w-full top-0 px-5 lg:px-8 xl:px-[8%] flex items-center justify-between z-50">
          {/* Logo */}
        <a href="#top">
          <Image src={assets.logo} className="w-14 sm:w-18 md:w-24 cursor-pointer" alt="Logo" />
        </a>

        {/* Desktop Menu - 'hidden md:flex' allows it to show on larger fulls */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          <li><a className="text-amber-400 hover:text-amber-700 transition-all" href="#top">Home</a></li>
          <li><a className="text-amber-400 hover:text-amber-700 transition-all" href="#about">About</a></li>
          <li><a className="text-amber-400 hover:text-amber-700 transition-all" href="#skills">Skills</a></li>
          <li><a className="text-amber-400 hover:text-amber-700 transition-all" href="#work">Project</a></li>
        </ul>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full text-white bg-white/10 hover:bg-white/20 transition-all"
          >
            Connect
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          {/* Menu Button for Mobile */}
          <button onClick={openMenu} className="block md:hidden p-3">
            <Image src={assets.menu} alt="menu" className="w-6" />
          </button>
        </div>

        {/* Side Panel (Mobile Menu) - Redesigned to fit dark theme */}
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

      {/* main content here */}
      <main className="flex flex-col-reverse lg:gap-44 md:flex-row w-full h-[90vh] justify-around sm:justify-center items-center px-5 md:px-20">

        {/* Left Content Section */}
        <section className="mt-5 md:mt-0 text-center md:text-left w-full md:w-auto">
          <div className="flex flex-col w-full px-0 lg:px-0">

            {/* Intro subheading */}
            <h3 className="flex items-center justify-center md:justify-start gap-2 text-xl md:text-2xl text-gray-300 font-Ovo">
              Hi! <Image src={assets.hand_icon} alt="namaste" className="w-6 animate-bounce" /> I'm <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">Priyanshu Singh</span>{" "}
            </h3>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white font-Ovo mt-4 sm:mt-0">
              Frontend Developer | <br />
              <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
                Focused on React.js
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0 font-Ovo mt-4">
              Aspiring Frontend Developer based in India, specializing in building
              scalable applications with React, Tailwind, and JavaScript.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full md:w-auto">
              {/* Resume Button */}
              <a
                href="/resume.pdf"
                download
                className="w-full sm:w-auto px-10 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg shadow-orange-900/20"
              >
                My resume
                <Image src={assets.download_icon} alt="resume" className="w-4 invert" />
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto px-10 py-3 rounded-full border border-white/20 text-white flex items-center justify-center gap-2 hover:bg-white/5 transition-all backdrop-blur-sm"
              >
                Contact me
                <Image src={assets.right_arrow} alt="contact" className="w-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Right Image Section */}
        <section className="relative w-full flex justify-center md:w-auto">
          <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full"></div>

          <div className="relative z-10 p-2 border border-amber-500 rounded-full">
            <Image
              src={assets.profile_img}
              alt="Priyanshu Singh"
              loading="eager"
              priority
              className="rounded-full w-48 md:w-80 lg:w-96 object-cover shadow-2xl"
            />
          </div>
        </section>
      </main>
    </header>
  );
};

export default Header;