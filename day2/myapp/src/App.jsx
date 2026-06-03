import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './compnents/Login'
import Signup from './compnents/Signup'
import Navbar from './compnents/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './compnents/Statebasics'
import Counter from './compnents/Counter'
import Click from './compnents/Click'
import Api from './compnents/Api'
import Product from './compnents/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <br />
      <br />
      <h1>welcome</h1>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/state' element={<Statebasics/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/clicker' element={<Click/>}/>
        <Route path='/api' element={<Api/>}/>
        <Route path='/product' element={<Product/>}/>
      </Routes>

    </>
  )
}

export default App

