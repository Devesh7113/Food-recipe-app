import React, { useContext, useEffect } from 'react'
import { GlobalContext } from "./context";
import { useParams } from 'react-router-dom';

function Details() 
{

  const {recipeDetails, setRecipeDetails, handleAddToFavourite, favouriteList} = useContext(GlobalContext);

  const {id} = useParams();
  // console.log(id);

  useEffect(() => {
    const getDetails = async () => 
    {
      const detail = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const jsonDetail = await detail.json();
      // console.log("data fetched successfully",jsonDetail);

      if(jsonDetail?.data)
      {
        setRecipeDetails(jsonDetail?.data?.recipe);
        // console.log(recipeDetails);
        // console.log("publisher ",recipeDetails.publisher);
      }
    } 

    getDetails();

  }, [])
  

  return (
    <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetails?.image_url}
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetails?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black">
          {recipeDetails?.title}
        </h3>
        <div>
        <button onClick={() => handleAddToFavourite(recipeDetails)} className='p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white'>
          {
            favouriteList && favouriteList.length>0 && favouriteList.findIndex(item =>  item.id === recipeDetails?.id) !== -1 ? "Remove from favourites" : "Add to favourites"
          }
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetails?.ingredients.map((ingredient) => (
              <li>
                <span className="text-xl font-semibold text-black">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-xl font-semibold text-black">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details