import React, { useEffect, useRef } from 'react'

function Game() {
  const canvasRef = useRef(null)

  useEffect( () =>{
    const canvas = canvasRef.current;
    let ctx = canvas.getContext('2d')
    ctx.fillStyle = 'blue'
    ctx.fillRect(50,50,100,80)
    ctx.strokeStyle = 'red'
    // ctx.stokeRect(50,50,100,80)
    return () =>{
      ctx.clearRect(0,0,canvas.width, canvas.height)
    }

  }, [])
    
  return (
    <>
        <h1 className='my-2 p-2 fira-mono text-2xl font-medium '>
            Enjoy this mini game While you are checking out the resume
        </h1>
        <canvas width='400' height='400' className='mx-auto bg-slate-300' ref={canvasRef}>

        </canvas>
        
    </>
  )
}

export default Game