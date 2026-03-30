import React from 'react'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {/* left section */}
        <div>
          <div className='mb-4'>
            <span className="text-xl font-bold text-dark">MarketingGeeks.io</span>
            <div className='w-4 h-4 bg-cyan-950 rounded-full'></div>

          </div>
          <p className='mb-4 text-dark/60'>
            Whether you're launching a new business or looking to elevate your existing brand.
          </p>
          <div className='flex items-center gap-6 py-2 font-semibold text-dark/65'>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#work">Our Work</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>

        {/* right section */}
        <div>
          <div>
            <h3 className='text-dark text-xl font-semibold mb-3'>Subscribe to our newsletter</h3>
            <p className='text-sm text-dark/70'> The latest news, articles and resources sent to your inbox weekly.</p>
            <div className='mt-4 flex flex-col md:flex-row items-start gap-2'>
              <input
              className='w-full px-6 py-3 border border-cyan-950/40 rounded outline-none placeholder:text-sm placeholder:text-dark/60' 
              placeholder='Enter your email'
              type="email" />
              <button className='px-6 py-3 rounded bg-cyan-950 text-white font-semibold cursor-pointer'>Suscribe</button>
            </div>
          </div>
        </div>

      </div>
      <div className='mt-6 border-t border-t-dark/40 py-4 flex flex-col md:flex-row items-start gap-6 justify-between '>
      <p className='text-dark/70 '>Copyright 2026 &copy; - All Rights Reserved</p>
      <div className='flex items-center gap-4 text-xl text-cyan-950'>
        <FaFacebook className='cursor-pointer' />
        <FaTwitter className='cursor-pointer' />
        <FaInstagram className='cursor-pointer' />
        <FaLinkedin className='cursor-pointer' />
        <FaGoogle className='cursor-pointer' />
      </div>
      </div>
      </div>
    </div>
  )
}

export default Footer
