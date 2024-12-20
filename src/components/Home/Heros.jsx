import React from 'react'
import {motion} from 'motion/react'


function Heros() {
  return (
    <>
        
        <div className=' flex md:flex-row  justify-center md:justify-around items-center'>
            <motion.div 
                initial ={{
                    x:-450
                }}
                
                animate={{    
                    x:0
                }} 
                transition={{
                    duration: 0.9,

                }}
                style={{
                    x:0,
                }}
                className='text-left  md:w-1/3'>
                    <h2 className='text-3xl fira-mono my-2 text-slate-500 font-semibold'>
                        Hey, I'm
                    </h2> 
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
                    x:-50,
                }}
            >
                <img src="src\assets\picofme.png" alt="" 
                className='border-slate-600 border-4 rounded-full ' />
            </motion.div>
        </div>

        <motion.div className="links flex flex-row gap-10 ml-5 md:mx-64 my-2 p-4 w-fit rounded  justify-left"
            initial={{
                y:50,
                opacity:0,
            }}
            animate={{
                y:0,
                opacity:1
            }}
            transition={{
                duration: 1,
                delay:0.3,
                
            }}
            style={{
                
            }}
            >
            <a href="https://linkedin.com/in/sachin-sd/">
                <i className="fa fa-linkedin-square text-5xl" ></i>
            </a>
            <a href="https://github.com/chriswilder3">
                <i className='fa fa-github-square text-5xl'></i>
            </a>
            
        </motion.div>

        <div className=' text-xl poppins w-fit ml-5 md:ml-52'>
            A fullstack developer with expertise <br />
            in React, Django and Python.
        </div>
    </>
  )
}

export default Heros