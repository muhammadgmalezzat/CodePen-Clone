import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom';
import SplitPane from 'react-split-pane';
import { FaHtml5, FaChevronDown,FaCss3,FaJs } from 'react-icons/fa';
import { FcSettings } from 'react-icons/fc';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { Link } from 'react-router-dom';
import logo  from '../assets/logo2.png';
import { AnimatePresence ,motion} from 'framer-motion';
import { MdCheck, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import {  doc,updateDoc} from 'firebase/firestore';
import { db } from '../config/firebase.config';
import Alert
    from '../Components/Alert';
import { UserProfileDetails } from '../Components';


const ProjectView = () => {
    const { slug } = useParams();
    
    const projects = useSelector((state => state.projects?.projects));
    const projectView = projects.filter(project => project.id === slug.slice(1))[0];
    const navigate = useNavigate();
    const [html, sethtml] = useState(projectView ? projectView.html : "");
    const [css, setcss] = useState(projectView ? projectView.css : "");
    const [js, setjs] = useState(projectView ? projectView.js : "");
    const [outPut, setoutPut] = useState(projectView ? projectView.outPut : "");
    const [isTitle, setisTitle] = useState(false);
    const [title, settitle] = useState(projectView ? projectView.title : "Untitled");
    const user = useSelector(state => state.user ? state.user.user : null);
    const [alert, setalert] = useState(false);

    useEffect(() => {
        if (user) {
            updateView();
        } else {
            navigate("/home/auth")
        }
        
        
        
    }, [html, css, js])
    
    const updateView = () => {
        const combinedOutPut = `
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <style type="text/css">${css}</style>
            </head>
            <body>
            ${html}
                <script >${js}</script>
            </body>
        </html>
        `;
        setoutPut(combinedOutPut);
    };
    const saveProgram = async () => {
        if (user.uid === projectView.user.uid) {
            const _doc = {
                id: projectView.id,
                title: title,
                html: html,
                css: css,
                js: js,
                outPut: outPut,
                user: user
            }
            await updateDoc(doc(db, "projects", `${projectView.id}`), _doc)
                .then((res) => {
                    setalert(true);
                    
                })
                .catch((err) => { console.log("err") })
            setInterval(() => {
                setalert(false)
            }, 2000);
        }
        
    };



    return (
        <>
            <div className='w-screen h-screen flex flex-col items-start justify-start overflow-hidden '>
                
                {/* Alert section */}
                <AnimatePresence>
                    {alert && <Alert status={"Success"} alertMsg={"Project Saved..."} />}
                </AnimatePresence>
                {/* Header sec */}
                <div className='w-full flex items-center justify-between px-12  py-6'>
                    <div className='flex items-center justify-center gap-6'>
                    
                        <Link to={"/home/projects"}>
                            <img className=' w-44 h-auto object-contain ' src={logo} alt="logo" />
                        </Link>
                        <div className='flex flex-col items-start justify-start'>
                            {/* title */}
                            <div className='flex items-center justify-center gap-3'>
                                <AnimatePresence>
                                    {
                                        isTitle ? (
                                            <>
                                                <motion.input
                                                    key={"TitleInput"}
                                                    type='text'
                                                    placeholder='Your title'
                                                    value={title}
                                                    className='px-3 py-2  rounded-md bg-transparent text-primaryText text-base outline-none border-none'
                                                    onChange={(e) => settitle(e.target.value)}
                                                />
                                            </>
                                        ) : (<>
                                            <motion.p
                                                key={"title label"}
                                                className='px-3 py-2 text-white text-lg'
                                            >
                                                {title}
                                            </motion.p>
                                        </>)
                                    }
                                </AnimatePresence>

                                <AnimatePresence>
                                    {
                                        user.uid === projectView.user.uid ? (isTitle ? (
                                            <>
                                                <motion.div
                                                    key={"MdCheck"}
                                                    whileTap={{ scale: .9 }}
                                                    className='cursor-pointer'
                                                    onClick={() => setisTitle(false)}
                                                >
                                                    <MdCheck className='text-2xl text-emerald-500' />
                                                </motion.div>
                                            </>
                                        ) : (<>
                                            <motion.div
                                                key={"MdEdit"}
                                                whileTap={{ scale: .9 }}
                                                className='cursor-pointer'
                                                onClick={() => setisTitle(true)}
                                            >
                                                <MdEdit className='text-2xl text-primaryText' />
                                            </motion.div>
                                        </>)) : (<></>)
                                    }
                                </AnimatePresence>
                            </div>
                            {/* follow */}
                            <div className='flex items-center justify-center px-3 -mt-2 gap-2'>
                                <p className='text-primaryText text-sm'>
                                    {
                                        user ? user.displayName : `${user?.email.split("@")[0]}`
                                    }
                                </p>
                                <motion.p
                                    whileTap={{ scale: .9 }}
                                    className='text-[10px] bg-emerald-500 rounded-sm px-2 py-[1px] text-primary font-semibold cursor-pointer'>
                                    +Follow
                                </motion.p>
                            </div>
                        </div>
                    </div>
                    {/* user sec */}
                    {
                        user.uid === projectView.user.uid && (<div className='flex items-center justify-center gap-4 '>
                            <motion.button
                                onClick={saveProgram}
                                whileTap={{ scale: .9 }}
                                className='px-6 py-4 bg-primaryText cursor-pointer text-base text-primary font-semibold rounded-md'>
                                Update
                            </motion.button>
                            <UserProfileDetails />

                        </div>)
                    }

                </div>
                {/* coding sec */}
                
                {/* horizontal sec */}
                <SplitPane
                    split='horizontal'
                    minSize={100}
                    maxSize={-100}
                    defaultSize={"50%"}
                >
                    {/* top coding sec */}
                    <SplitPane
                        split='vertical'
                        minSize={110}
                        maxSize={900}
                        defaultSize={550}
                    >
                        {/* HTML sec */}
                        <div className='w-full h-full flex flex-col items-start justify-start '>
                            <div className='w-full flex items-center justify-between '>
                                {/* top HTML Bar */}
                                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                    <FaHtml5 className='text-xl text-red-500' />
                                    <p className='text-primaryText font-semibold '>HTML</p>
                                </div>
                                {/* Icons */}
                                <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                                    <FcSettings className='text-xl' />
                                    <FaChevronDown className='text-xl text-primaryText' />
                                    

                                </div>

                            </div>
                            <div className='w-full px-2 '>
                                <CodeMirror
                                    value={html}
                                    height="100vh"
                                    theme={"dark"}
                                    extensions={[javascript({ jsx: true })]}
                                    onChange={(value, ViewUpdate) => {
                                        sethtml(value)
                                    }}
                                />
                            </div>
                        </div>

                        <SplitPane
                            split='vertical'
                            minSize={110}
                            maxSize={650}
                            defaultSize={550}
                        >
                            {/* CSS sec */}
                            <div className='w-full h-full flex flex-col items-start justify-start'>
                                <div className='w-full flex items-center justify-between '>
                                    {/* top  Bar */}
                                    <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                        <FaCss3 className='text-xl text-sky-500' />
                                        <p className='text-primaryText font-semibold '>CSS</p>
                                    </div>
                                    {/* Icons */}
                                    <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                                        <FcSettings className='text-xl' />
                                        <FaChevronDown className='text-xl text-primaryText' />

                                    </div>

                                </div>
                                <div className='w-full px-2 '>
                                    <CodeMirror
                                        value={css}
                                        height="100vh"
                                        theme={"dark"}
                                        extensions={[javascript({ jsx: true })]}
                                        onChange={(value, ViewUpdate) => {
                                            setcss(value)
                                        }}
                                    />
                                </div>
                            </div>
                            {/* Js sec */}
                            <div className='w-full h-full flex flex-col items-start justify-start'>
                                <div className='w-full flex items-center justify-between '>
                                    {/* top HTML Bar */}
                                    <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                        <FaJs className='text-xl text-yellow-500' />
                                        <p className='text-primaryText font-semibold '>JS</p>
                                    </div>
                                    {/* Icons */}
                                    <div className='cursor-pointer flex items-center justify-center gap-4 px-4'>
                                        <FcSettings className='text-xl' />
                                        <FaChevronDown className='text-xl text-primaryText' />

                                    </div>

                                </div>
                                <div className='w-full px-2 '>
                                    <CodeMirror
                                        value={js}
                                        height="100vh"
                                        theme={"dark"}
                                        extensions={[javascript({ jsx: true })]}
                                        onChange={(value, ViewUpdate) => {
                                            setjs(value)
                                        }}
                                    />
                                </div>
                            </div>
                        </SplitPane>
                    </SplitPane>
            
                    <div className='bg-white w-full'
                        style={{ overflow: 'hidden', height: '100%' }}
                    >
                        <iframe
                            title='result'
                            srcDoc={outPut}
                            style={{ border: "none", width: "100%", height: "100%" }}
                        />
                    </div>
                </SplitPane>

            </div>
        </>
    )
};

export default ProjectView