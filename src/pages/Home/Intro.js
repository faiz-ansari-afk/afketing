import React from 'react'

export default function Intro() {
    return (
        <div className='grid grid-cols-2 h-screen items-center sm:grid-cols-1 sm:mt-44 lg:grid-cols-1 sm:h-screen-auto lg:mt-32'>
            <div className='flex flex-col text-left space-y-10 sm:space-y-8 sm:text-center sm:justify-center sm:item-center'>
                <h1 className='text-7xl font-semibold text-primary sm:text-6xl '>The Best <br /><b className='text-secondary'>Marketing</b></h1>
                <h1 className='text-4xl font-semibold sm:text-4xl'>Doesn&apos;t feel like marketing</h1>
                <div>
                    <button className='px-16 py-5 bg-secondary text-xl text-black max-w-max hover:bg-primary hover:text-secondary duration-300 sm:px-10 sm:py-3 '>Get Started</button>
                </div>
            </div>
            <div className='p-10 sm:p-2 sm:mt-24'>
                <lottie-player
                    src="https://assets7.lottiefiles.com/packages/lf20_ik4jyixs.json"
                    background="transparent"
                    speed="1" loop autoplay></lottie-player>
            </div>

        </div>
    )
}
