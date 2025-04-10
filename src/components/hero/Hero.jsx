import { motion } from 'framer-motion'
import React from 'react'


const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }
  }
}

const silderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
}
const Hero = () => {
  return (
    <div className='hero overflow-hidden relative '>
        <div className="wrapper max-w-[1100px] h-full m-auto ">
            <motion.div className="textContainer h-full w-[50%] flex flex-col justify-center gap-[20px]" variants={textVariants} initial="initial" animate="animate">
                <motion.h2 variants={textVariants} className='text-[30px] text-purple tracking-[10px]'>Sudeep Gupta</motion.h2>
                <motion.h1 variants={textVariants} className='text-[50px] font-bold'>Web Developer and UI Designer</motion.h1>
                <motion.div variants={textVariants} className="buttons " >
                <motion.button variants={textVariants} className='p-[20px] border-solid border-1 border-white mr-[20px]'>See the Latest Works</motion.button>
                <motion.button variants={textVariants} className='p-[20px] border-solid border-1 border-white'>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" className='w-[50px]' alt="" />
            </motion.div>
            <motion.div variants={silderVariants} initial="initial" animate="animate" className="slidingTextContainer absolute text-[50vh] bottom-[-120px] whitespace-nowrap text-[#ffffff09] w-[50%] font-bold">
              Writer Content Creator Influencer
            </motion.div>
            <div className="imageContainer h-full w-[50%] absolute top-0 right-0">
                <img src="./hero.png" alt="" />
            </div>

        </div>
    </div>
  )
}

export default Hero