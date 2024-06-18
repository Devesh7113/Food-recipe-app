import React from 'react'
import { Link } from 'react-router-dom'

function recipeItem({item}) {
  return (
    <div className='flex flex-col w-60 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded border-white'>
        <div className='h-40 flex justify-center overflow-hidden items-center rounded-xl'>
            <img src={item?.image_url} alt="recipeDetail-image" className='block w-full'/>
        </div>
        <span className='text-sm text-cyan-700 font-medium'>{item?.publisher}</span>
        <h3 className='font-bold text-2xl truncate text-black'>{item?.title}</h3>
        <Link to={`/recipe-item/${item?.id}`} className='text-sm p-3 px-8 rounded-lg tracking-wider inline-block shadow-md bg-black text-white text-center'>RECIPE DETAILS</Link>
    </div>
  )
}

export default recipeItem