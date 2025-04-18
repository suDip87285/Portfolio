import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const Cursor = () => {
    const [position, setPosition] = useState({ x:0, y:0 })

    useEffect(() => {
      const mouseMove = (e) => {
        setPosition({x: e.clientX, y: e.clientY})
      }

    window.addEventListener("mousemove", mouseMove)
    console.log(position)

    return () => {
        window.removeEventListener("mousemove", mouseMove)
    }}, [])
    
  return (
    <motion.div className='cursor w-[50px] h-[50px] rounded-[50%] border border-solid border-white fixed z-[999]' animate={{x: position.x, y: position.y}}></motion.div>
  ) 
}

export default Cursor