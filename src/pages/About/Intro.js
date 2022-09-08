import AboutIntro from './about-intro.svg'
export default function Intro() {
    return (
        <>
            <div className="about-intro h-screen sm:hidden lg:hidden">

            </div>
            <div className="grid grid-cols-2   items-center min-h-screen sm:grid-cols-1 lg:grid-cols-1 sm:bg-secondary lg:bg-secondary ">
                <div className='z-10 flex justify-center sm:p-5 sm:-mt-40 lg:-mt-32'>
                    <img src={AboutIntro} alt="" className='h-[700px] w-[700px] lg:h-[600px] lg:w-[600px]' />
                </div>
                <div 
                className='z-10 max-w-max flex flex-col space-y-5  sm:space-y-0 sm:z-1 sm:max-w-none lg:space-y-0 sm:z-1 lg:max-w-none justify-center items-center'>
                    <div className=' '>
                        <h1 className='text-9xl font-semibold text-secondary lg:text-primary sm:text-primary sm:text-5xl sm:-mt-64 lg:-mt-64'>AFKeting</h1>
                        <h1 className='text-xl pt-3 mt-5 border-t-2 text-secondary border-t-white sm:pt-3 lg:text-primary sm:text-primary sm:w-64'>OLDER | STRONGER | WISER</h1>
                    </div>
                </div>
            </div>
        </>
    )
}
