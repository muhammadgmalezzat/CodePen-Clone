import React, { useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import { HiChevronDoubleRight, HiChevronDoubleLeft } from 'react-icons/hi2'
import { MdHome } from 'react-icons/md'
import { FaSearchengin } from "react-icons/fa";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import FeaturedProjects from './FeaturedProjects';
import SignUp from './SignUp';
import { useDispatch, useSelector } from 'react-redux';
import { UserProfileDetails ,Header} from '../Components';
import { SET_SEARCH_TERM } from '../context/actions/searchActions';
import { FaUser } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import YourWork from './YourWork';
import SocialCard from '../Components/SocialCard';



const Home = () => {
    const [openMenu, setOpenMenu] = useState(true);
    const user = useSelector(state => state.user);
    const searchTerm = useSelector((state => state.searchTerm?.searchTerm ? state.searchTerm?.searchTerm : ""));
    const dispatch = useDispatch();
    return (
        <>
            {/* navbar  */}
            <div className={`w-2 ${openMenu ? "w-2" : "flex-[20] xl:flex-[.15] md:flex-[.3] sm:flex-[.5] w-[11rem] "} min-h-screen max-h-screen relative bg-secondary px-3 py-6 flex flex-col items-center justify-start gap-4 transition-all duration-200 ease-in-out `}>
                {/* anchor */}
                <motion.div
                    whileTap={{ scale: .9 }}
                    onClick={() => setOpenMenu(!openMenu)}
                    className='w-8 h-8 rounded-tr-lg rounded-br-lg -right-6 absolute flex items-center justify-center cursor-pointer bg-secondary'
                >{openMenu ? <HiChevronDoubleRight className='text-white text-xl' /> : <HiChevronDoubleLeft className='text-white text-xl' />}
                </motion.div>

                <div className='overflow-hidden w-full flex flex-col gap-4'>
                    {/* logo */}
                    <Link to={"/home"}>
                        <img className=' w-72 h-auto object-contain ' src={logo} alt="logo" />
                    </Link>
                    {/* start coding Button */}
                    {
                        user ? (<Link to={"/newProject"} className='px-2 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200 mb-5' >
                            <p className='text-gray-400 capitalize '>Start Coding</p>
                        </Link>) : (<Link to={"/home/auth"} className='px-2 py-3 flex items-center justify-center rounded-xl border border-gray-400 cursor-pointer group hover:border-gray-200 mb-5' >
                            <p className='text-gray-400 capitalize '>Start Coding</p>
                        </Link>)
                    }
                    
                    {/* home Nav link*/}
                    {
                        user ? (<>
                            <Link to={"/home/"} className='flex items-center justify-center gap-6 ani h-[50px] '>
                                <MdHome className='text-primaryText text-2xl ' />
                                <p className='text-primaryText text-2xl' >Home</p>
                            </Link>
                            <Link to={"/home/projects"} className='flex items-center justify-center gap-6 ani h-[50px] '>
                                <HiMiniSquares2X2 className='text-primaryText text-2xl ' />
                                <p className='text-primaryText text-2xl' >Explore</p>
                            </Link>
                            <Link to={"/home/your-work"} className='flex items-center justify-center gap-6 ani h-[50px] '>
                                <FaUser className='text-primaryText text-2xl ' />
                                <p className='text-primaryText text-2xl' >Your Work</p>
                            </Link>
                            <SocialCard />
                            
                        </>) : (<>
                            <Link to={"/home/projects"} className='flex items-center justify-center gap-6 ani h-[50px] '>
                                <HiMiniSquares2X2 className='text-primaryText text-2xl ' />
                                <p className='text-primaryText text-2xl' >Explore</p>
                            </Link>
                            <SocialCard />
                        </>
                                
                        )
                    }
                </div>
            </div>
            {/* ============== left side finished ===================  */}

            {/* feature pins section*/}
            <div className='flex-1 min-h-screen max-h-screen overflow-y-scroll h-full flex flex-col items-start justify-start px-8 md:px-12 py-4 md:py-4 featured'>
                {/* top sec */}
                <div className='flex w-full items-center justify-between gap-3'>
                    {/* search */}
                    <div className='flex bg-secondary w-full px-2 py-1 md:px-4 md:py-3 rounded-md items-center justify-center gap-3'>
                        <FaSearchengin className='md:text-2xl text-primaryText' />
                        <input
                            className='flex-1 px-4 py-1 md:text-xl border-none outline-none bg-transparent text-primaryText placeholder:text-gray-600'
                            placeholder='Search CodePin'
                            type='text'
                            value={searchTerm}
                            onChange={(e) => dispatch(SET_SEARCH_TERM(e.target.value))}
                        />
                    </div>
                    
                    {/* Signup */}
                    {!user && (
                        
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            className='flex items-center justify-center gap-3 '>
                            <Link to={"/home/auth"} className=' bg-emerald-500 px-2 py-2 md:px-6 rounded-md text-white text-lg cursor-pointer hover:bg-emerald-700'>
                                Signup
                            </Link>

                        </motion.div>
                    )}
                    {/* Profile section */}
                    {user && (
                        <UserProfileDetails />
                    )}
                    
                    

                </div>
                {/*  home introduction */}

                <div className='w-full ' >
                    {/* featured Projects */}
                    <Routes>
                        <Route path='/projects' element={<FeaturedProjects />} />
                        <Route path='/your-work' element={<YourWork />} />
                        <Route path='/auth' element={<SignUp />} />
                        <Route path='/' element={<Header />} />
                    </Routes>
                </div>
            </div>
            
        </>
    )
};

export default Home;