import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

function Slider() {
    const slides = [
        {
            id: 1,
            heading: 'Make more time for the work that matters most',
            description: 'Best software platform for running an internet business.',
            image: 'Group 35.svg'
        },
        {
            id: 2,
            heading: 'Meao more time for the work that matters most',
            description: 'Best software platform for running an internet business.',
            image: 'Group 33.svg'
        },
        {
            id: 3,
            heading: 'Kao more time for the work that matters most',
            description: 'Best software platform for running an internet business.',
            image: 'Component 1.svg'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Function to go to the previous slide
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    // Function to go to the next slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [currentIndex]); // Runs whenever currentIndex changes

    const { heading, description, image } = slides[currentIndex];

    return (
        <>
            <section className="max-w-[1400px] py-24 px-6 md:px-12 mx-auto">
                <div className="flex flex-col justify-between md:flex-row items-center gap-20">
                    {/* Left area */}
                    <div className="flex flex-col justify-between w-full md:w-1/2 space-y-6">
                        <img src="degic 1.svg" alt="" className="w-16 mb md:w-24" />
                        <h1 className="text-2xl md:text-5xl font-bold max-w-md">{heading}</h1>
                        <p className="text-gray-400 text-[20px]">{description}</p>
                        <div className="flex items-center space-x-4 mt-4">
                            <button className="bg-[#C4C4C4] p-3 rounded-full hover:bg-gray-200 transition" onClick={prevSlide}>
                                <ChevronLeft className="text-black" />
                            </button>
                            <button className="bg-[#C4C4C4] p-3 rounded-full hover:bg-gray-200 transition" onClick={nextSlide}>
                                <ChevronRight className="text-black" />
                            </button>
                        </div>
                    </div>

                    {/* Right area */}
                    <div className="flex w-full md:w-1/2 justify-center">
                        <img src={image} alt="" className="w-full md:w-[65%] object-cover" />
                    </div>
                </div>

        <div className="scrolling-container">
        <div className="scrolling-wrapper">
            {/* Logos (Duplicated for Seamless Scrolling) */}
            <img src="google.svg" alt="Google" className="w-[100px] mx-4" />
            <img src="Stripe.svg" alt="Stripe" className="w-[100px] mx-4" />
            <img src="Uber.svg" alt="Uber" className="w-[100px] mx-4" />
            <img src="Stripe.svg" alt="Stripe" className="w-[100px] mx-4" />
            <img src="Path.svg" alt="Path" className="w-[100px] mx-4" />
            <img src="airbnb.svg" alt="Airbnb" className="w-[100px] mx-4" />
            <img src="masterCard.svg" alt="MasterCard" className="w-[100px] mx-4" />

            {/* Duplicate Logos for Seamless Transition */}
            <img src="google.svg" alt="Google" className="w-[100px] mx-4" />
            <img src="Stripe.svg" alt="Stripe" className="w-[100px] mx-4" />
            <img src="Uber.svg" alt="Uber" className="w-[100px] mx-4" />
            <img src="Stripe.svg" alt="Stripe" className="w-[100px] mx-4" />
            <img src="Path.svg" alt="Path" className="w-[100px] mx-4" />
            <img src="airbnb.svg" alt="Airbnb" className="w-[100px] mx-4" />
            <img src="masterCard.svg" alt="MasterCard" className="w-[100px] mx-4" />
        </div>
        </div>
    </section>
        </>
    );
}

export default Slider;
