import { document } from 'postcss'
import React from 'react'
import {motion} from 'motion/react'

function Info() {
  
  return (
    <>
        <div  className='mt-10  text-xl fira-mono  text-sky-400 rounded-md py-1 px-4' >
            Who am I? 
        </div>
        <div className='triangle h-20 py-3'>
            <i className='fa fa-angle-double-down text-3xl font-semibold'></i>
        </div>

        <div className='info mt-16 flex flex-col fira-mono gap-10 hover '>
            <motion.div className='text-lg text-white bg-gradient-to-b from-sky-500 via-sky-700 to-slate-800 rounded-md w-fit mx-auto p-4'
               initial={{
                 scale:0
               }} 
               whileInView={{
                 scale:1
               }}
               transition={{
                delay:0.2,
                duration:0.8,
               }}
            >
                
                <h1 className='text-left font-semibold'>
                    MTech in CSE
                </h1>
                <span className='h-1 bg-slate-400'></span>
                <p>
                    National Institute of Technology Karnataka, Surathkal
                </p>
            </motion.div>

            <motion.div className='text-lg bg-gradient-to-b from-orange-200 via-orange-500 to-slate-800 rounded-md w-fit mx-auto p-4'
               initial={{
                 scale:0
               }} 
               whileInView={{
                 scale:1
               }}
               transition={{
                delay:0.2,
                duration:0.8,
               }}
            >
                
                <h1 className='text-left'>
                    Skills:
                </h1>
                <p>

                </p>
            
            </motion.div>
            
        </div>
    </>
  )
}

export default Info