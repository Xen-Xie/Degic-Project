import React from 'react'
import { ArrowForward } from "@mui/icons-material"

function Blog() {
    const CardData = [
        {
            "id": 1,
            imgSrc: 'vase-1-b 2.svg',
            title: 'Make myspace your best designed space',
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel: 'Design'
        },
        {
            "id": 2,
            imgSrc: 'vase-1-b 2 (1).svg',
            title: 'My company culture has changed today',
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel: '3D illustrations'
        },
        {
            "id": 3,
            imgSrc: 'vase-1-b 2 (2).svg',
            title: 'Professionals in craft! All products were super great',
            description: 'A lot of different components that will help you create the perfect look for your project',
            buttonLavel: 'Development'
        }
    ]
  return (
    <>
        <section className='max-w-[1400px] mx-auto py-12 px-6'>
            <div className='flex flex-col sm:flex-row justify-between items-center mb-10'>
                <div>
                    <h1 className='text-3xl lg:text-6xl font-bold text-[#000000]'>Get more from our blog</h1>
                    <p className='text-[#000000]/50 max-w-lg text-[22px]mt-1'>There are a lot of different components that will help you create the perfect look for your project</p>
                </div>
                <div>
                    <button className='bg-[#5F62E2]/15 text-[#5F62E2] rounded-lg font-semibold py-3 px-6 hover:bg-violet-200 transition duration-300 cursor-pointer'>Explore All <ArrowForward />
                              
                              </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-5'>
                {
                    CardData.map((card, index) => (
                        <div key={card.id} className='bg-[#F7F7FA] rounded-xl overflow-hidden hover:shadow-xl transition duration-300'>
                            <img src={card.imgSrc} alt="blog" className='w-full object-cover'/>
                            <div className='p-6'>
                                <h3 className='text-xl md:text-2xl font-semibold mb-2'>{card.title}</h3>
                                <p className='text-[#000000]/50 mb-4'>{card.description}</p>
                                <button className='text-[#2AB691] bg-[#2AB691]/11 rounded-xl text-sm py-2 px-3 cursor-pointer hover:bg-[#2AB691]/50 transition duration-300 hover:text-[#FFFF] active:scale-105'>{card.buttonLavel}</button>
                            </div>
                        </div>
                        ))
                }

            </div>

        </section>
    </>
  )
}

export default Blog