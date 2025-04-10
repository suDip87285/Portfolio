import { motion } from 'framer-motion'
import React from 'react'
import Sidebar from './sidebar/Sidebar'

const Navbar = () => {
  return (
    <div className="navbar h-[100px] ">
        <Sidebar />
        <div className="wrapper h-full max-w-[1100px] m-auto flex items-center justify-between">
            <motion.span 
            initial={{ opacity:0, scale:0.5 }} 
            animate={{ opacity:1, scale:1 }} 
            transition={{ duration: 0.5 }} 
            className='font-bold'>Sudeep Gupta</motion.span>
            <div className="scoial flex gap-[20px] ">
                <a href=""><img className='w-[18px] h-[18px]' src="/facebook.png" alt="" /></a>
                <a href=""><img className='w-[18px] h-[18px]' src="/instagram.png" alt="" /></a>
                <a href=""><img className='w-[18px] h-[18px]' src="/youtube.png" alt="" /></a>
                <a href=""><img className='w-[18px] h-[18px]' src="/dribbble.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar