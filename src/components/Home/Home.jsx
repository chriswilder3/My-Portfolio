import React from 'react'
import Heros from './Heros';
import Info from './Info';
import Game from './Game';
function Home() {
  return (
    <>  
        <div >
          <Heros />
          <Info />
          <Game />
        </div>
        
    </>
  )
}

export default Home