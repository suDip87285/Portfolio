import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const variants = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {
  
    const ref = useRef()

    const isInView = useInView(ref, {margin: "-100px"})

  return (
    <motion.div className='services h-full flex flex-col justify-between items-center' variants={variants} initial="initial" ref={ref} animate={isInView && "animate"}>
        <motion.div variants={variants} className="textContainers">
            <p> Focus on helping your brand grow <br /> and more forward</p><hr />
        </motion.div>
        <motion.div variants={variants} className="titleContainers">
            <div className="title">
                <img className='w-[300px] h-[100px] rounded-[50px] ' src="./people.webp" alt="" />
                <h1><motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.</h1>
                <button>Waht We Do</button>
            </div>
        </motion.div>
        <motion.div variants={variants} className="listContainer flex max-w-[1100px] mt-[50px]">
            <motion.div whileHover={{background: "lightgray", color: "black"}} className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in aut minima placeat a odit adipisci nulla nisi nam inventore officiis </p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background: "lightgray", color: "black"}} className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in aut minima placeat a odit adipisci nulla nisi nam inventore officiis </p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background: "lightgray", color: "black"}} className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in aut minima placeat a odit adipisci nulla nisi nam inventore officiis </p>
                <button>Go</button>
            </motion.div>
            <motion.div whileHover={{background: "lightgray", color: "black"}} className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum in aut minima placeat a odit adipisci nulla nisi nam inventore officiis </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services