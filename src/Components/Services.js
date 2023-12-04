import React from 'react'
import s1 from '../assets/1.svg';
import s2 from '../assets/2.svg';
import s3 from '../assets/3.svg';

const Services = () => {
    return (
        <div className='w-full flex gap-10 flex-wrap justify-center items-center py-5 px-5 '>
            <div className="relative flex xl:w-1/3 lg:w-1/2 w-full flex-col rounded-xl bg-secondary bg-clip-border  shadow-md mb-8 mt-8">
                <div className="relative mx-4 -mt-6 h-20 w-20 px-3 py-3 overflow-hidden rounded-xl 0 bg-clip-border shadow-lg bg-black ">
                    <img
                        src={s1}
                        alt='f'
                        className='w-16 h-16' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Build & Test
                </h5>
                <p className="block font-sans text-xl  leading-relaxed font-semibold antialiased text-primaryText">
                    Get work done quicker by building out entire projects or isolating code to test features and animations. Want to keep it all under wraps? Upgrade to a PRO account to keep your work private.
                </p>
            </div>
            <div className="p-6 pt-0">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Try the Editor
                </button>
            </div>
            </div>

            <div className="relative flex xl:w-1/3 lg:w-1/2 w-full flex-col rounded-xl bg-secondary bg-clip-border  shadow-md mb-8 mt-8">
                <div className="relative mx-4 -mt-6 h-20 w-20 px-3 py-3 overflow-hidden rounded-xl 0 bg-clip-border shadow-lg bg-black ">
                    <img src={s2} alt='f' className='w-16 h-16' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Learn & Discover
                </h5>
                <p className="block font-sans text-xl   leading-relaxed font-semibold antialiased text-primaryText">
                    Want to upgrade your skills and get noticed? Participating in CodePen Challenges is a great way to try something new. We frequently feature these Pens on our homepage and across social media!
                </p>
            </div>
            <div className="p-6 pt-0">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Join this Week’s Challenge
                </button>
            </div>
            </div>

            <div className="relative flex xl:w-1/3 lg:w-1/2 w-full flex-col rounded-xl bg-secondary bg-clip-border  shadow-md mb-8 mt-8">
                <div className="relative mx-4 -mt-6 h-20 w-20 px-3 py-3 overflow-hidden rounded-xl 0 bg-clip-border shadow-lg bg-black ">
                    <img src={s3} alt='f' className='w-16 h-16' />
            </div>
            <div className="p-6">
                <h5 className="mb-2 block font-sans text-4xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Share Your Work
                </h5>
                <p className="block font-sans text-xl   leading-relaxed font-semibold antialiased text-primaryText">
                    Become a part of the most active front-end community in the world by sharing work. Presenting at a conference? Show your code directly in the browser with Presentation Mode.
                </p>
            </div>
            <div className="p-6 pt-0">
                <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none text-sm">
                    Explore Trending
                </button>
            </div>
            </div>
        </div>
        
    )
};

export default Services