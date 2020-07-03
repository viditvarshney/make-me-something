import React, {useEffect, useState} from 'react';
import Recipie from "./components/Recipie";
import './App.css';

const App = () => {

  const APP_ID = "b0c88e89";
  const APP_KEY = "8a48ee090f0748e560af55b87c10ba41";


  const [recipies, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Burger');

  useEffect(() => {
    getRecipies();

  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    
  }

  const getSearch = (e) => {

    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return(
    <div className = "App">
      <form onSubmit = {getSearch} className="search-form">
        <input 
          className = "search-bar" 
          type="text" value = {search} 
          onChange = {updateSearch}
        />
        <button 
          className = "search-button" 
          type="submit">
            <span>Search</span>
        </button>
      </form>
      <div className="recipes">
        {recipies.map(recipie => (
          <Recipie
          key = {recipie.recipe.image}
          title = {recipie.recipe.label} 
          calories ={recipie.recipe.calories}
          image ={recipie.recipe.image}
          ingredients = {recipie.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}


export default App;
