import React from 'react';
import style from '../recipe.module.css';
const Recipie = ({title, calories, image, ingredients}) => {
    return(
        <div className = {style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient, index) => (
                    
                    <li key = {index}>
                        
                        {ingredient.text}
                        
                    </li>
                ))}
            </ul>
            <p>Cal: {calories} </p>
            <img className={style.image} src={image} alt="chicken"/>
        </div>
    );
}

export default Recipie