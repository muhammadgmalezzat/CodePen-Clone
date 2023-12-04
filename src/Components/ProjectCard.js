import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion';
import { MdBookmark } from 'react-icons/md';
import UserLogo from '../assets/user-avatar.jpg';
import Link from 'react-router-dom'
import { useNavigate } from "react-router-dom";


const ProjectCard = ({ project, index }) => {
    const navigate = useNavigate();
const user = useSelector(state => state.user? state.user.user : null);
    const changeRoute = () => {
        if (user) {
navigate(`/home/projects/project-view/:${project.id}`);
        } else {
            navigate(`/home/auth`);
        }

        
    }
    return (
        <motion.a
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .5, delay: index * .1 }}
            onClick={() => { changeRoute() }}
            to={`/project-view/${project.id}`}
            className='w-full cursor-pointer md:w-[450px] h-[375px] bg-secondary rounded-md p-4 flex flex-col items-center justify-center gap-4 '
        >
            <div className='bg-gray-200 w-full h-full rounded-md overflow-hidden '
                style={{ overflow: 'hidden', height: '100%' }}
            >
                <iframe
                    title='result'
                    srcDoc={project.outPut}
                    style={{ border: "none", width: "100%", height: "100%" }}
                />
            </div>
            <div className='flex items-center justify-start gap-3 w-full '>
                <div className='w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-xl overflow-hidden cursor-pointer bg-emerald-500'>
                    {
                        project?.user?.photoURL ? (<>
                            <motion.img
                                whileHover={{ scale: 1.2 }}
                                src={UserLogo}
                                alt="UserLogo"
                                referrerPolicy='no-referrer'
                                className='w-full h-full object-cover'
                            />
                        </>) : (<p className='text-xl text-white font-semibold capitalize'>
                            {project?.user?.email[0]}
                        </p>)
                    }
                </div>
                <div >
                    <p className='text-white text-lg capitalize '>
                        {project?.title}
                    </p>
                    <p className='text-primaryText text-sm capitalize'>
                        {
                            project?.user?.displayName ? project?.user?.displayName : `${project?.user.email.split("@")[0]}`
                        }
                    </p>
                </div>

                <motion.div className='cursor-pointer ml-auto'
                    whileTap={{ scale: .9 }}>
                    <MdBookmark className='text-primaryText text-3xl' />

                </motion.div>

            </div>
        </motion.a>
    );
};

export default ProjectCard