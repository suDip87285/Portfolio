import React from 'react'

const Togglebutton = ({ setOpen }) => {
  return (
    <button onClick={()=> setOpen((prev)=> !prev) } className='w-[50px] h-[50px] fixed top-[25px] left-[25px] bg-transparent rounded-[50%]'>
        <svg width="23" viewBox="0 0 23 23">
            <path strokeWidth="3" stroke="black" strokelinecap="round" 
            variants={{
                closed: { d: "M 2 2.5 L 20 2.5"},
                open: { d: "M 2 2.5 L 20 2.5"},
            }}/>
            <path strokeWidth="3" stroke="black" strokelinecap="round" />
            <path strokeWidth="3" stroke="black" strokelinecap="round" />
        </svg>
    </button>
  )
}

export default Togglebutton