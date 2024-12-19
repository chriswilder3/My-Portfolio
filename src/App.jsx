import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
           <Route path='/' element={ <Layout />}>
             < Route index element={ <Home />} />
           </Route>
        </Routes>
      </Router>
      
    </>
  )
}

export default App
