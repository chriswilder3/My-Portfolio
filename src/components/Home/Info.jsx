import React from 'react';
import { motion } from 'framer-motion';

function Info() {
  return (
    <>
      
      <div className="mt-10 text-xl fira-mono text-sky-400 rounded-md py-1 px-4 tracking-wide">
        Who am I?
      </div>

      
      <div className="triangle h-20 py-3 flex justify-center">
        <i className="fa fa-angle-double-down text-3xl text-gray-600 animate-bounce"></i>
      </div>

      
      <div className="info mt-16 flex flex-col fira-mono gap-10">
        {/* Education */}
        {/* bg-gradient-to-b from-sky-500 via-sky-400 to-slate-700 */}
        <motion.div
          className="text-lg bg-sky-500 text-white shadow-lg rounded-lg w-fit mx-auto p-6 hover:scale-105 transform transition-all duration-300"
          initial={{
            scale: 0.8,
          }}
          whileInView={{
            scale: 1,
          }}
          exit={{
            scale:0.8,
          }}
          transition={{
            duration: 0.3,
            ease:'easeIn',
          }}
          viewport={{
            once:false,
            amount:0.3,
          }}
        >
          <h1 className="text-left font-semibold poppins text-slate-200 text-2xl mb-2">
            MTech in CSE
          </h1>
          <span className="block h-1 bg-slate-600 opacity-50 mb-3"></span>
          <p className="text-gray-200 ">
            National Institute of Technology Karnataka, Surathkal
          </p>
        </motion.div>

        {/* Skills */}
        {/* bg-gradient-to-b from-orange-300 via-orange-400 to-gray-700 */}
        <motion.div
          className="text-lg bg-orange-300  shadow-lg rounded-lg w-fit mx-auto p-6 hover:scale-105 transform transition-all duration-300"
          initial={{
            scale: 0.8,
          }}
          whileInView={{
            scale: 1,
          }}
          exit ={{
            scale:0.8,
          }}
          transition={{
            duration: 0.3,
            ease:'easeIn',
          }}
          viewport={{
            once:false,
            amount:0.3,
          }}

        >
          <h1 className="text-left font-semibold poppins text-slate-700  text-2xl mb-2">
            Skills
          </h1>
          <span className="block h-1 bg-white opacity-50 mb-3"></span>
          <p className="text-slate-800">
            React,  Django, Python, Machine Learning, Tailwind CSS
          </p>
        </motion.div>
      </div>
    </>
  );
}

export default Info;
