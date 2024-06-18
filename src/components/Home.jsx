import React, { useContext } from "react";
import { GlobalContext } from "./context";
import RecipeItem from "./recipe-item.jsx";

function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => (
          <RecipeItem item={item} />
        ))
      ) : (
        <div>
          <p className="text-4xl text-lg text-center text-black font-extrabold">
            Nothing to show. Please search something
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
