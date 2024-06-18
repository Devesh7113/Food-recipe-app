import React, {useState, useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { GlobalContext } from './context';

function Navbar() {

  const { item, setItem , handleSubmit } = useContext(GlobalContext);
  
  const handleChange = (e) =>
    {
      setItem(e.target.value);
    }


  return (
    <>
        <div className='flex justify-between items-center py-4'>
          <h2 className="text-3xl font-semibold">Food Recipe</h2>
          <form action="submit" onSubmit={handleSubmit}>
            <input className='bg-white/75 p-3 px-8 rounded-full outline-none shadow-lg shadow-red-100 focus:shadow-red-200' placeholder='Enter Items...' name='search' onChange={handleChange} type="text" value={item}/>
          </form>
          <div className='flex gap-5 mt-3'>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/favourites">Favourites</NavLink>
          </div>
        </div>  
    </>
  )
}

export default Navbar