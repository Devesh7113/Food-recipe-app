import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./components/Home.jsx"
import Details from "./components/Details.jsx"
import Favourite from "./components/Favourite.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div className='mx-6 p-6 bg-white text-gray-600 text-lg'>
    <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/favourites" element={<Favourite/>} />
        <Route path="/recipe-item/:id" element={<Details/>} />
      </Routes>
    </div>
  )
}

export default App