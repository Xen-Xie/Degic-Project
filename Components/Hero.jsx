import React from 'react'

function Hero() {
  return (
    <>
      <section className='grid grid-cols-12 xl:gap-[220px] mx-10 mt-10'>
          <div className='col-span-12 md:col-span-6 space-y-10 order-1 md:order-0'>
            <h1 className='text-4xl font-bold max-w-lg lg:text-6xl'>Simply explained with illustrations</h1>
            <p className='text-lg lg:text-xl text-gray-500'>There are a lot of different components that will help you create the perfect look for your project</p>
            <div className='flex gap-4 flex-wrap'>
            <dutton className="bg-[#5F62E2] text-[#FFFFFF] rounded-lg font-semibold py-3 px-6 hover:bg-blue-700 transition duration-300 cursor-pointer">Get Started</dutton>
            <button className='bg-[#5F62E2]/15 text-[#5F62E2]  rounded-lg font-semibold py-3 px-6 hover:bg-violet-200 transition duration-300 cursor-pointer'>Learn More</button>
          </div>
        </div>

        <div className='col-span-12 md:col-span-6 order-0 md:order-1'>
          <img src="Component 1.png" alt="" className='w-full max-w-lg h-auto'/>

        </div>
        
      </section>
    </>
  )
}

export default Hero