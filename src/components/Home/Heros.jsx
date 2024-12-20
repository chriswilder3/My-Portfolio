import React from 'react'
import {motion} from 'motion/react'


function Heros() {
  return (
    <>
        <div className='  text-left pl-40  p-4'>
            <h2 className='text-3xl fira-mono my-2 text-slate-500 font-semibold'>
                Hey, I'm
            </h2> 
            
        </div>
        <div className=' md:flex flex-row justify-around items-center'>
            <motion.div 
                initial ={{
                    x:-450
                }}
                
                animate={{    
                    x:150
                }} 
                transition={{
                    duration: 0.9,

                }}
                style={{
                    x:0,
                }}
                className='text-left  md:1/3'>
                
                    <h1 className='text-7xl  fira-mono main-name  font-bold'>
                        Sachin 
                    </h1>
                    <h1 className='text-7xl  fira-mono main-name  font-bold'>
                        Doddamani 
                    </h1>
                
            </motion.div>

            <motion.div 
                initial={{
                    scale: 0,
                }}
                animate={{
                    scale:1,
                }}
                transition={{
                    duration: 1,
                    ease:'easeIn'
                }}
                style={{
                    width:150,
                    height:150,
                }}
            >
                <img src="src\assets\picofme.png" alt="" 
                className='border-slate-600 border-4 rounded-full ' />
            </motion.div>
        </div>

        <div className="links flex flex-row">
            <a href="">
                <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">

            </a>

        </div>
    </>
  )
}

export default Heros