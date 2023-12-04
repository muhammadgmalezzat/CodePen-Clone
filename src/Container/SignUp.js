import React, { useState } from 'react'
import { UserAuthInput } from '../Components';
import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdPassword } from 'react-icons/md';
import { motion } from 'framer-motion';
import { signInWithGitHub, signInWithGoogle } from '../utils/helpers';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase.config';
import { useNavigate } from 'react-router-dom';



const SignUp = () => {
    const [Email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [getEmailValidationStatus, setgetEmailValidationStatus] = useState(false);
    const [isLogin, setisLogin] = useState(false);
    const [alert, setalert] = useState(false);
    const [alertMsg, setalertMsg] = useState("");
    const navigate=useNavigate()

    const createNewUser = async (user) => { 
        if (getEmailValidationStatus) {
            await createUserWithEmailAndPassword(auth, Email, password).then((userCred) => { 
                if (userCred) {
                    navigate("/home/projects")
                }
            }).catch((error) => { 
                console.log(error)
            })
        }
    }
    const loginWithEmailPassword = async (user) => {
        if (getEmailValidationStatus) {
            await signInWithEmailAndPassword(auth, Email, password)
                .then((userCred) => {
                    if (userCred) {
                        navigate("/home/projects")
                    }
                }).catch((error) => {
                    if (error.message.includes('user-not-found')||error.message.includes('invalid-login-credentials')) {
                        setalert(true);
                        setalertMsg("Invalid Id: User not found");
                    } else if (error.message.includes('wrong-password')) { 
                        setalert(true);
                        setalertMsg("Password Mismatch");
                    }else  { 
                        setalert(true);
                        setalertMsg("Temporarily disabled due to many failed login");
                    }
                    setInterval(() => {
                        setalert(false);
                    },4000)
                })
        }
    }

    
    return (
        <div className='w-full py-6'>
            <div className='w-full justify-center items-center flex flex-row py-8 '>
                
            
                <div className=' w-full  md:w-min py-4 rounded-xl  flex flex-row items-center justify-center gap-8 flex-wrap'>
                    {/* Sign Up Options */}
                    
                    <div className='flex md:px-20 px-8 w-auto  md:w-min py-4 rounded-xl bg-secondary shadow-md  flex-col items-center justify-center gap-8'>
<p className='text-yellow-50 text-2xl py-4'>Welcome to CodePen</p>
                        {/* Email */}
                    <UserAuthInput
                        label="Email"
                        placeHolder="Email" i
                        isPass={false}
                        key="Email"
                        setStateFunc={setEmail}
                        setgetEmailValidationStatus={setgetEmailValidationStatus}
                        Icon={FaEnvelope}
                    />
                    {/* Password */}
                    <UserAuthInput
                        label="Password"
                        placeHolder="Password"
                        isPass={true}
                        key="password"
                        setStateFunc={setpassword}
                        setgetEmailValidationStatus={setgetEmailValidationStatus}
                        Icon={MdPassword}
                    />
                    {/* Alert */}
                    {alert && (
                        <motion.p
                            key={"alert message"}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className='text-red-500'>{alertMsg}
                        </motion.p>
                    )}
                    

                    {/* login button */}
                    {isLogin ? (
                        <motion.div
                            onClick={loginWithEmailPassword}
                            whileTap={{ scale: .9 }}
                            className='flex items-center justify-center w-full px-10 py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500 '
                        >
                            <p className='text-xl text-white '>Login</p>
                        </motion.div>) :
                        (
                            <motion.div
                                onClick={createNewUser}
                                whileTap={{ scale: .9 }}
                                className='flex items-center justify-center w-full px-10 py-3 rounded-xl hover:bg-emerald-400 cursor-pointer bg-emerald-500 '
                            >
                                <p className='text-xl text-white '>Sign Up</p>
                            </motion.div>
                        )
                    }

                    {!isLogin ?
                        (<p className='text-sm text-primaryText flex items-center justify-center gap-3'>
                            Already Have an Account !
                            <span
                                onClick={() => setisLogin(!isLogin)}
                                className='text-emerald-400 cursor-pointer'>Login Here
                            </span>
                        
                        </p>) :
                        (<p className='text-sm text-primaryText flex items-center justify-center gap-3'>
                            Doesn't Have an Account !
                            <span
                                onClick={() => setisLogin(!isLogin)}
                                className='text-emerald-400 cursor-pointer'>Create Here
                            </span></p>
                        )
                    }

                    {/* Or Section */}
                    <div className='flex items-center justify-center gap-12 '>
                        <div className='h-[1px] bg-[rgba(256,256,256,.2)] rounded-md w-24'></div>
                        <p className='text-sm text-[rgba(256,256,256,.2)] '>OR</p>
                        <div className='h-[1px] bg-[rgba(256,256,256,.2)] rounded-md w-24'></div>
                    </div>

                    {/* sign with google */}
                    <motion.div
                        onClick={signInWithGoogle}
                        whileTap={{ scale: .9 }}
                        className='flex items-center justify-center gap-3 backdrop-blur-md w-full py-3 rounded-xl bg-[rgba(256,256,256,.2)] hover:bg-[rgba(256,256,256,.4)] cursor-pointer'
                    >
                        <FcGoogle className='text-3xl ' />
                        <p className='text-xl text-white'>Sign in With Google</p>

                    </motion.div>
                    {/* Or Section */}
                    <div className='flex items-center justify-center gap-12 '>
                        <div className='h-[1px] bg-[rgba(256,256,256,.2)] rounded-md w-24'></div>
                        <p className='text-sm text-[rgba(256,256,256,.2)] '>OR</p>
                        <div className='h-[1px] bg-[rgba(256,256,256,.2)] rounded-md w-24'></div>

                    </div>
                    {/* sign with github */}
                    <motion.div
                        onClick={signInWithGitHub}
                        whileTap={{ scale: .9 }}
                        className='flex items-center justify-center gap-3 backdrop-blur-md w-full py-3 rounded-xl bg-[rgba(256,256,256,.2)] hover:bg-[rgba(256,256,256,.4)] cursor-pointer'
                    >
                        <FaGithub className='text-3xl ' />
                        <p className='text-xl text-white'>Sign in With GitHub</p>

                    </motion.div>
                    {/* privacy conditions */}
                    

                    <p className="block  text-sm text-base font-light leading-relaxed font-semibold antialiased text-primaryText">
                        By signing up, you agree to CodePen's Terms of Service , Code of Conduct , and Privacy Policy .
                    </p>
                    </div>


                    
                    {/* conditions  */}

                    
                </div>

            </div>
        </div>
        
    );
    
}

export default SignUp;
