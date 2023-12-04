import React from 'react'
import Editor  from '../assets/home-editor.png';
import { motion } from 'framer-motion';
import SocialCard from '../Components/SocialCard';
import { Link } from 'react-router-dom';
import Services from './Services';
const Header = () => {
    return (
        <>
        <div className='w-full flex flex-col xl:flex-row items-center justify-center gap-3 py-5 px-1 h-screen head'>
            <div className='flex flex-col  w-[100%] py-3 px-4'>
                <p className='text-white lg:text-6xl md:text-4xl text-3xl font-bold px-4 py-6 sm:px-2 headerText' >The best place to build, test, and discover front-end&nbsp;code.</p>
                <p className='text-white lg:text-2xl md:text-xl text-lg px-0'>CodePen is a
                    <strong>social development environment</strong> for front-end designers and developers. Build and deploy a website, show off your work, build test cases to learn and debug, and find inspiration.
                </p>
                <motion.div
                    whileTap={{ scale: .9 }}
                    className='flex items-center justify-center md:w-[50%] px-10 py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500 mt-10'
                >
                    <Link to={"/home/auth"} className='  px-2 py-2 md:px-6 rounded-md text-white text-lg  '>
                                Signup
                            </Link>
                </motion.div>
            </div>

            <div className='flex  w-[100%] py-4 '>
                <img src={Editor} className='w-full h-full object-cover' />
            </div>
            </div>
            <div className='w-full flex gap-10 flex-wrap justify-center items-center py-12 px-5 '>
                <Services />
            </div>
            
            <SocialCard />
        </>
        
    )
};

export default Header;