import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import React, { useRef } from 'react'

const Portfolio = () => {

    const items = [
        {
            id: 1,
            title: "react Commerce",
            img: "https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae similique accusantium vel perspiciatis natus, soluta dolore, error excepturi laudantium eveniet beatae doloremque."
        },
        {
            id: 2,
            title: "react Commerce",
            img: "https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae similique accusantium vel perspiciatis natus, soluta dolore, error excepturi laudantium eveniet beatae doloremque."
        },
        {
            id: 3,
            title: "react Commerce",
            img: "https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae similique accusantium vel perspiciatis natus, soluta dolore, error excepturi laudantium eveniet beatae doloremque."
        },
        {
            id: 4,
            title: "react Commerce",
            img: "https://images.pexels.com/photos/30694611/pexels-photo-30694611/free-photo-of-scenic-palm-tree-avenue-on-a-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae similique accusantium vel perspiciatis natus, soluta dolore, error excepturi laudantium eveniet beatae doloremque."
        },
    ]

    const Single = ({ item }) => {
        const ref = useRef();

        const {scrollYProgress} = useScroll({
            target: ref, 
            // offset: ["start start", "end start"]
        })
        
        const y = useTransform(scrollYProgress, [0,1], [-100, 100])
        // const x = useTransform(scrollYProgress, [0,1], [-300, 300])
        return <section>
            <div className="container flex items-center justify-center w-full h-full overflow-hidden">
                <div className="wrapper h-full max-w-[1100px] m-auto flex gap-[50px] flex items-center justify-center">
                    <div className="imgConatiner flex-1 h-[50%]" ref={ref}>
                        <img src={item.img} className='w-full h-full object-cover' alt="" />
                    </div>
                    <motion.div className="textContainer flex-1 flex flex-col gap-[20px]" style={{y}}>
                        <h2 className='text-[50px] font-bold'>{item.title}</h2>
                        <p className='text-[18px] text-gray'>{item.description}</p>
                        <button className='bg-black border-none rounded-[10px] p-[15px] w-[200px] cursor-pointer'>See Demo</button>
                    </motion.div>
                </div>
            </div>
        </section>
    }
    
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end", "start start"]
    })
    
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        dumping: 30
    })

  return (
    <div className='relative' ref={ref}>
        <div className="progress sticky top-0 left-0 p-[50px] text-center text-[36px]" >
            Featured Works
            <motion.div style={{ scaleX }} className="progressBar h-[5px] bg-white"></motion.div>
        </div>
        {items.map((items) => (
            <Single item={items} key={items.id} />
        ))}
    </div>
  )
}

export default Portfolio