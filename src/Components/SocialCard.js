import React from 'react'
import { FaFacebook ,FaGithub,FaLinkedin} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Logo from '../assets/logo1.png'
const SocialCard = () => {
    return (
        <div className='  flex w-full justify-end  items-center '>
            <div className="flex items-center justify-center px-4 py-7">
                <div className="rounded-xl overflow-hidden relative text-center p-4 group items-center flex flex-col max-w-sm hover:shadow-2xl transition-all duration-500 shadow-xl">
                    <div className="text-emerald-500 group-hover:scale-105 transition-all">
                        {/* MG Logo */}
                        <img src={Logo} className="w-20 h-20" alt='df'/>
                    </div>
                    
                    <div className="group-hover:pb-12 transition-all duration-500 delay-200 py-2">
                        <h1 className="font-semibold text-gray-700">Muhammad Gmal</h1>
                        <p className="text-gray-500 text-sm">@Software_Engineer</p>
                    </div>
                    {/* Social */}
                    <div className="flex items-center transition-all duration-500 delay-200 group-hover:bottom-3 -bottom-full absolute gap-2 justify-evenly w-full ">
                        <div className="flex gap-3 text-2xl bg-gray-700 text-white p-3 hover:p-2 transition-all duration-500 delay-200 rounded-full shadow-sm ">
                            
                            <a
                                className="hover:scale-110 transition-all duration-500 delay-200"
                                href='https://www.facebook.com/mohamed.gmal.98871/'
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaFacebook />
                            </a>
                            <a
                                className="hover:scale-110 transition-all duration-500 delay-200"
                                href='https://github.com/muhammadgmalezzat'
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub />
                            </a>
                            <a
                                className="hover:scale-110 transition-all duration-500 delay-200"
                                href='https://www.linkedin.com/in/muhammad-gmal-61330119b/'
                                target="_blank" rel="noreferrer"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                className="hover:scale-110 transition-all duration-500 delay-200"
                                href='https://leetcode.com/muhammad_gmal/'
                                target="_blank"
                                rel="noreferrer"
                            >
                                <SiLeetcode />
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default SocialCard