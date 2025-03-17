import React from 'react'

function BombArea() {
  return (
    <>
        <section className='bg-[#5F62E2] w-full h-auto mb-5'>
            <div className='flex flex-col lg:flex-row items-center justify-between max-w-[1400px] mt-24 mx-auto'>
                <div className='flex flex-1 flex-col gap-8 p-5'>
                    <h1 className='text-[#FFFFFF] text-3xl sm:text-4xl lg:text-5xl font-bold text-center md:text-start max-w-lg'>The quickest way to create awesome presentation</h1>
                    <div className='flex flex-wrap gap-3 mb-10'>
                        <dutton className="bg-[#2AB691] text-[#FFFFFF] rounded-lg font-semibold py-3 px-6 hover:bg-green-700 transition duration-300 cursor-pointer">Get Started</dutton>
                        <button className='bg-[#FFFFFF]/15 text-[#FFFFFF]  rounded-lg font-semibold py-3 px-6 hover:bg-violet-200 transition duration-300 cursor-pointer'>Learn More</button>
                    </div>
                </div>

                <div className='flex-1'>
                    <img src="bomb 1.svg" alt="" className='w-full h-auto  '/>

                </div>
            </div>

        </section>
    </>
  )
}

export default BombArea