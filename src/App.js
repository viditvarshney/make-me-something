import React, {useEffect, useState} from 'react';
import Recipie from "./components/Recipie";
import './App.css';
require('dotenv').config();

const App = () => {

  const app_id = process.env.APP_ID;
  const app_key = process.env.APP_KEY;


  const [recipies, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('Burger');

  useEffect(() => {
    getRecipies();

  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`
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
