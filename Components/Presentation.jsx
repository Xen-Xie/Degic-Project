import React from 'react'
import { ArrowForward } from "@mui/icons-material"

function Presentation() {
  const cardData = [
    {source:"Group 4.svg",
      heading:"Managment",
      text:"Software platform for running your new internet business"
    },
    {source:"Group 4 (1).svg",
      heading:"Entertainment",
      text:"Software platform for running your new internet business"
    },
    {source:"Group 33.svg",
      heading:"Marketing",
      text:"Software platform for running your new internet business"
    },
    {source:"floppy 1.svg",
      heading:"References",
      text:"Software platform for running your new internet business"
    }
  ];
  const socialLink = [
    {link:"Group 9.svg",
      referance: "https://www.facebook.com/hemel.707"
    },
    {link:"Group 10.svg",
      referance: "https://www.instagram.com/md.rakibulhasanhemel/"
    },
    {link:"Group 11.svg",
      referance: "https://x.com/Hemel0007"
    },

  ]
  return (
    <>
      <section className='bg-gray-50'>
        <div className='container flex flex-col lg:flex-row items-center gap-20 py-20 px-6 md:px-12 lg:px-16 max-w-[1400px] mx-auto'>

          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-1/2'>
            {cardData.map((card, index)=>(
              <div key={index} className='p-4 gap-4 bg-white rounded-xl hover:bg-gray-100 transition duration-300 text-center'>
                <div className='flex items-center justify-center'>
                  <img src={card.source} alt="" className='w-full'/>
                </div>
                <div>
                  <h3 className='text-lg font-semibold md:text-xl'>{card.heading}</h3>
                  <p className='text-gray-400 text-sm md:text-base'>{card.text}</p>
                </div>

              </div>
            ))}

          </div>

          <div className='w-full lg:w-1/2 text-center lg:text-left space-y-6'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold max-w-lg mx-auto lg:mx-0 text-center md:text-center lg:text-start'>The quickest way to create modern presentation</h1>
          <p className='text-gray-400 max-w-md mx-auto lg:mx-0 text-sm md:text-base text-center lg:text-start'>Best software platform for running an internet business. We build the most powerful and flexible tools for internet commerce.</p>
          <button className='bg-[#5F62E2]/15 text-[#5F62E2] rounded-lg font-semibold py-3 px-6 hover:bg-violet-200 transition duration-300 cursor-pointer'>Explore All <ArrowForward />
          
          </button>
          <p className='text-gray-500 !mt-[85px] text-center lg:text-start'>Follow Us</p>
          <div className='flex justify-center lg:justify-start gap-4 mt-6 items-center'>
            {
              socialLink.map((social, index)=>(
                <a href={social.referance} className='bg-[#C4C4C4] rounded-full p-3 hover:bg-gray-400 transition duration-300' target='_blank' key={index}>
                  <img src={social.link} alt="" className='w-[30px] h-[30px]'/>
                </a>
              ))
            }

          </div>

            
          </div>

          </div>
        
      </section>
    </>
  )
}

export default Presentation