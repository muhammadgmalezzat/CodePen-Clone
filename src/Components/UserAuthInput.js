import React, { useState,useEffect } from 'react'
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion'

const UserAuthInput = ({ label, placeHolder, isPass, setgetEmailValidationStatus, setStateFunc, Icon }) => {
    const [inputValue, setInputValue] = useState("");
    const [showPass, setshowPass] = useState(false);
    const [isEmailValid, setisEmailValid] = useState(false);

    useEffect(() => {
        if (placeHolder === "Email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const status = emailRegex.test(inputValue);
            setisEmailValid(status);
            setgetEmailValidationStatus(status);
        }
    }, [inputValue]);
    
    const handleInputChange = (e) => {
        //console.log(inputValue)
        setStateFunc(e.target.value)
        setInputValue(e.target.value)

    }
    return (
        <div className='flex flex-col items-start justify-start gap-1 '>
            <label className='text-sm text-gray-300 '>{label}</label>
            <div className={`flex items-center justify-center gap-3 w-full md:w-96 rounded-md px-4 py-1 bg-gray-200 
            ${placeHolder === 'Email' ? "pr-12" : "px-4"}
            ${!isEmailValid && placeHolder === 'Email' && inputValue.length > 0 && "border-2 border-red-500 "}
            `}>
                <Icon className='text-text555 text-2xl' />
                <input
                    type={isPass && !showPass ? 'password' : 'text'}
                    placeholder={placeHolder}
                    className={`flex-1 w-full h-full py-2 outline-none border-none bg-transparent text-text555 text-lg 
                `}
                    value={inputValue}
                    onChange={handleInputChange}

                />
                {isPass && (
                    <motion.div
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setshowPass(!showPass)}
                        className='cursor-pointer'>
                        {showPass ? (<FaEye className='text-text555 text-2xl' />) : (<FaEyeSlash className='text-text555 text-2xl' />)}
                        
                    </motion.div>
                )}

            </div>
    
        </div>
    );
};

export default UserAuthInput