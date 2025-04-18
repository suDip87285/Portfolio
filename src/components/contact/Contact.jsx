import { animate, motion, useInView } from 'framer-motion'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

const variants = {
    initial: {
        y: 500,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        }
    },
    
}  

const Contact = () => { 
    const ref = useRef()
    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const isInView = useInView(ref,{margin: "-100px"})
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_1c6a7pp', 'template_bjiptog', formRef.current, {
            publicKey: 'YLohDNLNZqQWV3a3J',
          })
          .then(
            () => {
              setSuccess(true)
            },
            (error) => {
                setError(true)
                console.log(error)
            },
          );
      };
    
  return (
    <motion.div ref={ref} className='contact h-full max-w-[1100px] m-auto flex items-center justify-between gap-[50px]' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer flex-1 flex flex-col gap-[40px]" variants={variants}>
            <motion.h1 className='text-[60px] font-semibold leading-[80px]' variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2 className='font-[600]'>Mail</h2>
                <span className='font-[300]'>hello@react.dev</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2 className='font-[600]'>Address</h2>
                <span className='font-[300]'>hello@react.dev</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2 className='font-[600]'>Phone</h2>
                <span className='font-[300]'>hello@react.dev</span>
            </motion.div>
        </motion.div>
        <motion.div className="formContainer flex-1 relative">
        <motion.div className="phoneSvg absolute l-0 top-0 m-auto w-full h-full z-[-1]" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay: 3,duration: 1}}>
            <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <motion.path strokeWidth={5} fill='none' initial={{pathLength: 0}} animate={isInView && { pathLength: 1 }} transition={{duration: 3}} d="M724.6 623.5c-41.5-9.3-68.2 6.4-85.1 20.8-19.5 16.9-30.1 42.6-67.1 33.3-87.8-21.6-188.3-121.5-210.3-210.3-9.3-36.8 16.5-47.6 33.3-67.1 14.4-16.9 30-43.6 20.8-85.1-10.5-47.2-61.4-142.4-83.5-169.7-14.2-17.3-30.9-23.6-44.3-24.9-39.4-3.8-71.3 17.2-84.5 30.2-46.2 45.6-63 124.5-16.1 236.3 38.3 91 106.7 182.8 187.2 263.3s172.3 148.8 263.3 187.2c111.8 46.9 190.7 30.1 236.3-16.1 13-13.2 34.1-45.1 30.2-84.5-1.3-13.4-7.6-30.1-24.9-44.3-27.3-22.1-122.4-73-169.7-83.5z"></motion.path>
            </svg>
          
            </motion.div >
            <motion.form ref={formRef} onSubmit={sendEmail} initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4,duration: 1}} action="" className='flex flex-col gap-[20px] '>
                <input name='name' className='p-[20px] bg-transparent border border-white border-solid text-white rounded-medium' type="text" required placeholder='Name' id="" />
                <input name='email' className='p-[20px] bg-transparent border border-white border-solid text-white rounded-medium' type="email" required placeholder='Email'/>
                <textarea name='message' className='p-[20px] bg-transparent border border-white border-solid text-white rounded-medium' rows={8} placeholder='Message' id=""></textarea>
                <button className='p-[20px] border-none bg-white text-black font-[500]'>Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Contact