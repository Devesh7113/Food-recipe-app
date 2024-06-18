import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) 
{
  const [item, setItem] = useState("");
  const [recipeList, setRecipeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [favouriteList, setFavouriteList] = useState([])

  const navigate = useNavigate();

  const handleAddToFavourite = (getCurrentItem) =>
  {
    // console.log(getCurrentItem);
    let cpyFavouriteList = [...favouriteList];
    const index = cpyFavouriteList.findIndex(item => item.id === getCurrentItem.id);

    if(index === -1)
    {
      cpyFavouriteList.push(getCurrentItem);
    }
    else
    {
      cpyFavouriteList.splice(index)
    }

    setFavouriteList(cpyFavouriteList);
  }

  // console.log(favouriteList, "favouriteList");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${item}`
      );

      const data = await res.json();
      // console.log(data);
      // console.log("...................");

      if (data.data.recipes) {
        setRecipeList(data.data.recipes);
        console.log(recipeList);
        setLoading(false);
        setItem("");
        navigate("/home");
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
      setItem("");
    }
  };

  return (
    <GlobalContext.Provider
      value={{ item, setItem, loading, recipeList, setRecipeList, handleSubmit, recipeDetails, setRecipeDetails, handleAddToFavourite, favouriteList}}
    >
      {children}
    </GlobalContext.Provider>
  );
}
