import React, { useState } from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "17c97c65-ecfc-4256-966e-a4a4b24c74a4");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message");
    } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setResult("");
      }, 3000);
    }
  };

  return (
    <div id="contact" className='w-full px-6 md:px-[12%] py-20 bg-[#030712] text-white scroll-mt-20 relative overflow-hidden'>
      
      {/* Background Glows */}
      <div className="absolute top-20 right-0 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-0 w-60 h-60 bg-amber-500/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header Section */}
      <div className='text-center mb-16 relative z-10'>
        <h4 className='text-amber-500 text-lg font-Ovo mb-2 tracking-widest uppercase'>
            Connect with me
        </h4>
        <h2 className='text-4xl md:text-5xl font-bold font-Ovo bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent'>
            Get in Touch
        </h2>
        <p className='text-center max-w-2xl mx-auto mt-5 text-gray-400 leading-relaxed font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={onSubmit} className='max-w-2xl mx-auto relative z-10'>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8'>
            {/* Name Input */}
            <div className="group">
                <input 
                    type="text" 
                    placeholder='Enter your name' 
                    required
                    className='w-full p-4 outline-none border border-white/10 rounded-xl bg-[#111] text-amber-500 placeholder-gray-500 focus:border-amber-500/50 focus:bg-white/5 transition-all duration-300' 
                    name='name' 
                />
            </div>

            {/* Email Input */}
            <div className="group">
                <input 
                    type="email" 
                    placeholder='Enter your email' 
                    required 
                    className='w-full p-4 outline-none border border-white/10 rounded-xl bg-[#111] text-amber-500 placeholder-gray-500 focus:border-amber-500/50 focus:bg-white/5 transition-all duration-300' 
                    name='email' 
                />
            </div>
        </div>

        {/* Message Input */}
        <textarea 
            rows='6' 
            placeholder='Enter your message' 
            required 
            className='w-full p-4 outline-none border border-white/10 rounded-xl bg-[#111] text-amber-500 placeholder-gray-500 mb-8 resize-none focus:border-amber-500/50 focus:bg-white/5 transition-all duration-300' 
            name='message'
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className='py-3.5 px-10 w-full md:w-max flex items-center justify-center gap-2 bg-linear-to-r from-amber-500 to-orange-600 text-white cursor-pointer rounded-full mx-auto hover:scale-105 active:scale-95 transition-transform duration-300 shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed'
        >
          {isSubmitting ? "Sending..." : "Submit now"}
          {!isSubmitting && <Image src={assets.right_arrow} alt='arrow' className='w-4' />}
        </button>

        {/* Result Message */}
        {result && (
            <p className={`mt-4 text-center text-sm transition-opacity duration-500 ${result.includes("Success") ? "text-green-400" : "text-red-400"}`}>
                {result}
            </p>
        )}
      </form>
    </div>
  )
}

export default Contact