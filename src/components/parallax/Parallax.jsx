import { motion , useScroll, useTransform} from 'framer-motion'
import React, { useRef } from 'react'


const Parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
     target:ref,
     offset: ["start start", "end start"]
  })

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  return (
    <div ref={ref} className='w-full h-full relative flex items-center justify-center overflow-hidden' style={{background: type === "services" ? "Linear-gradient(100deg, #111132, #0c0c1d" : "Linear-gradient(100deg, #111132, #505064"}}>
      <motion.h3 style={{ y: yText}} className='text-[100px]'>{type === "services" ? "What We Do?" : "What We Did"}</motion.h3>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{ y: yBg }}></motion.div>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
    </div>
  )
}

export default Parallax