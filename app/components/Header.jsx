import { useRef, useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Header = () => {
  const sideMenuRef = useRef();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16.5rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16.5rem)";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    const sections = document.querySelectorAll("section[id], header[id], div[id]");
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: "-50% 0px -50% 0px" });

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#top" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
  ];

  return (
    <header id="top" className="relative w-full overflow-x-hidden min-h-screen flex flex-col justify-center">
      
      <Image
        src={assets.header_bg_color}
        alt="header background"
        fill
        priority
        className="object-cover -z-10 opacity-90"
      />

      <nav 
        className={`fixed top-0 left-0 w-full px-5 lg:px-12 xl:px-[8%] flex items-center justify-between z-50 transition-all duration-300 
        ${isScrolled ? "bg-white/10 backdrop-blur-lg shadow-sm" : "bg-transparent shadow-none"}`}
      >
        <a href="#top">
          <Image src={assets.logo} className="w-16 md:w-18 lg:w-20 cursor-pointer" alt="Logo" />
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                className={`font-medium transition-all duration-300 relative group 
                ${activeSection === item.href.replace('#', '') ? "text-amber-400" : "text-white/90 hover:text-amber-400"}`} 
                href={item.href}
              >
                {item.name}
                
                {activeSection === item.href.replace('#', '') && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-amber-400 rounded-full shadow-[0_0_5px_#f59e0b]"></span>
                )}
              </a>
            </li>
          ))}

        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-8 py-2.5 border border-white/30 rounded-full text-white hover:bg-white/10 transition-all font-medium"
          >
            Connect
            <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>

          <button onClick={openMenu} className="block md:hidden p-2 cursor-pointer">
            <Image src={assets.menu} alt="menu" className="w-8" />
          </button>
        </div>

        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-6 py-10 px-10 fixed -right-64 top-3 w-64 z-50 h-min rounded-2xl bg-[#030712]/90 border-white/20 border backdrop-blur-xl transition duration-500 shadow-2xl"
        >
          <div onClick={closeMenu} className="absolute right-6 top-6 cursor-pointer p-2 bg-gray/10 rounded-full">
            <Image src={assets.close} alt="close" className="w-4 invert" />
          </div>

          {navItems.map((item) => (
             <li key={item.name}>
                <a 
                    onClick={closeMenu} 
                    className={`text-lg block ${activeSection === item.href.replace('#', '') ? "text-amber-400 font-bold" : "text-white"}`} 
                    href={item.href}
                >
                    {item.name}
                </a>
             </li>
          ))}
          
          <li><a onClick={closeMenu} className="text-lg text-white hover:text-amber-500" href="#contact">Contact me</a></li>
        </ul>
      </nav>

      <main className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-16 lg:gap-20 pt-32 md:pt-0 lg:pt-20">
        
        <section className="text-center md:text-left flex flex-col items-center md:items-start max-w-2xl">
          <h3 className="flex items-center gap-2 text-lg md:text-2xl text-gray-200 font-Ovo mb-2">
            Hi! <Image src={assets.hand_icon} alt="namaste" className="w-6 animate-bounce" /> I'm 
            <span className="text-amber-400 font-semibold">Priyanshu Singh</span>
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white font-Ovo">
            Frontend Developer | <br />
            <span className="bg-linear-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Focused on React.js
            </span>
          </h1>

          <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mt-4 max-w-lg">
            Aspiring Frontend Developer based in India, specializing in building
            scalable applications with React, Tailwind, and JavaScript.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
            <a href="/resume.pdf" download className="px-8 py-3 rounded-full bg-linear-to-r from-amber-500 to-orange-600 text-white font-semibold shadow-lg hover:scale-105 transition-all w-full sm:w-auto flex justify-center items-center gap-2">
              My resume <Image src={assets.download_icon} alt="resume" className="w-4 invert" />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all backdrop-blur-sm w-full sm:w-auto flex justify-center items-center gap-2">
              Contact me <Image src={assets.right_arrow} alt="contact" className="w-4" />
            </a>
          </div>
        </section>

        <section className="relative group">
          <div className="absolute inset-0 bg-amber-500/30 blur-[60px] rounded-full group-hover:bg-amber-500/40 transition-all duration-500"></div>
          <div className="relative z-10 p-2 rounded-full border-2 border-amber-500/50">
            <Image src={assets.profile_img} alt="Priyanshu Singh" priority className="rounded-full w-56 sm:w-72 md:w-80 lg:w-md object-cover shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]" />
          </div>
        </section>

      </main>
    </header>
  );
};

export default Header;