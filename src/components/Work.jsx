import React from 'react'
import { workItems } from '../assets/assets'

const Work = () => {
  return (
    <div id='workItems' className=''> 
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
      <div className='text-center mb-16'>
        <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our Latest Work</h1>
        <p className='text-dark/60 max-w-2xl mx-auto text-xl'>Whether you're launching a new business or looking to elevate your existing brand.</p>
      </div>
      {/* Work Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12 py-20'>
        {
          workItems.map((Work, index)=>(
            <div key = {index} className='  rounded-xl overflow-hidden border border-cyan-950/50 hover:scale-105 transition duration-300 cursor-pointer mb-10'>
                <img src={Work.image} alt="" className='w-full h-60 object-cover' />
                <div className='mt-6 p-6'>
                <h1 className='text-xl text-dark'>{Work.title}</h1>
                <p className='text-dark/60 mt-4'>{Work.description}</p>
                </div>
            </div>
          ))
        }
      </div>
      </div>
    </div>
  )
}

export default Work
