import React from 'react'

function Video() {
  return (
    <>
        <section className='bg-gray-100 py-24 px-12'>
            <div>
                <h1 className='text-center text-2xl md:text-5xl font-semibold'>Use illustrations in UI design</h1>
                <div className='flex justify-center items-center mt-16'>
                    <video src="Reverse Situation.mp4" className='w-2xl object-cover rounded-xl'controls poster='/mask-group-1.png'></video>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Video