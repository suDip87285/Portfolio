import React, { useState } from 'react'
import Links from './Links'
import Togglebutton from './Togglebutton'
import { motion } from 'framer-motion'
import { clipPath } from 'framer-motion/client'
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20
    }
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

const Sidebar = () => {
  
  const [open, setOpen] = useState(false)

  return (
    <motion.div className='sidebar flex flex-col items-center justify-center bg-white text-black' animate={open ? "open" : "closed"}>
        <motion.div className="fixed top-0 left-0 bottom-0 w-[400px] bg-white" variants={variants}>
            <Links />
        </motion.div>
        <Togglebutton setOpen={setOpen}/>
    </motion.div>
  )
}

export default Sidebar