import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import { ArrowForward } from "@mui/icons-material"

function Time() {
  return (
    <>
        <section className='gap-24 py-16 px-6 lg:px-16 max-w-[1400px] mx-auto'>
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
                {/* left side */}
                <div className='flex-1 items-start'>
                    <img src="Group 17.svg" alt="" className='w-full h-auto max-w-lg'/>

                </div>
                {/* right side */}
                <div className='flex flex-1 flex-col gap-4'>
                    <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Many ways to use illustrations in design</span></p>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Simply explained with illustrations</span></p>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Make more time for the work</span></p>
                    <div className='flex flex-wrap gap-3 mb-10'>
                        <button className='bg-[#5F62E2]/15 text-[#5F62E2] rounded-lg font-semibold py-3 px-6 hover:bg-[#5F62E2] hover:text-[#FFFFFF] transition duration-300 cursor-pointer'>Learn more <ArrowForward />
                                  
                                  </button>
                    </div>

                </div>
            </div>
            {/* Section 2 */}
            <div className='flex flex-col-reverse lg:flex-row items-center justify-between mt-24'>
                
                {/* left side */}
                <div className='flex flex-1 flex-col gap-4'>
                    <h1 className='text-3xl sm:text-4xl lg:text-6xl font-bold max-w-lg'>Make more time for the work</h1>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Many ways to use illustrations in design</span></p>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Simply explained with illustrations</span></p>
                    <p className='text-black text-lg'><CheckCircleOutlineIcon className='text-green-600 me-1'/><span>Make more time for the work</span></p>
                    <div className='flex flex-wrap gap-3 mb-10'>
                        <button className='bg-[#5F62E2]/15 text-[#5F62E2] rounded-lg font-semibold py-3 px-6 hover:bg-[#5F62E2] hover:text-[#FFFFFF] transition duration-300 cursor-pointer'>Learn more <ArrowForward />
                                  
                                  </button>
                    </div>

                </div>
                {/* Right side */}
                <div className='flex-1 items-start'>
                    <img src="Group 22.svg" alt="" className='w-full h-auto max-w-lg'/>

                </div>
            </div>
        </section>
    </>
  )
}

export default Time