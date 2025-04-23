import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiRequest } from '../../Utility/apiRequest';
import { recipeUrl } from '../../Utility/endPoint';


function RecipeDetails() {
const { recipeId } = useParams();
const [recipeDetails, setRecipeDetails] = useState({});
const [isLoading, setIsLoading] = useState(false);

const fetchRecipeDetails = async() => {
    try {
        setIsLoading (true)
        const recipeDetails = await apiRequest(
          `${recipeUrl.recipePoint}/${recipeId}`
        );
        setRecipeDetails(recipeDetails);
        
    } catch (error) {
       setIsLoading(false); 
        
    } finally{
       setIsLoading(false); 
    }
}

useEffect(() => {
    fetchRecipeDetails();
}, [])

  return (
    <div className="container">
      <div className="product-details-wrapper">
        {recipeDetails?.image && (
          <div className="product-details-image">
            <img src={recipeDetails?.image} />
          </div>
        )}

        <div className="product-details-content">
          {recipeDetails?.name && <h2>{recipeDetails?.name}</h2>}

          <div className="two-column-details">
            <div className="two-column-ind">
              {recipeDetails?.ingredients && (
                <>
                  <h3>Ingredients</h3>
                  <ul className="ingredients-list">
                    {recipeDetails?.ingredients?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="two-column-ind">
              {recipeDetails?.instructions && (
                <>
                  <h3>instructions</h3>
                  <ul className="ingredients-list">
                    {recipeDetails?.instructions?.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          <div className="recipes-features">
            {recipeDetails?.prepTimeMinutes && (
              <div className="recipes-features-item">
                <h3>Preparation Time in Minutes</h3>
                <p>{recipeDetails?.prepTimeMinutes}</p>
              </div>
            )}

            {recipeDetails?.cookTimeMinutes && (
              <div className="recipes-features-item">
                <h3>Cooking Time in Minutes</h3>
                <p>{recipeDetails?.cookTimeMinutes}</p>
              </div>
            )}

            {recipeDetails?.servings && (
              <div className="recipes-features-item">
                <h3>Servings</h3>
                <p>{recipeDetails?.servings}</p>
              </div>
            )}

            {recipeDetails?.difficulty && (
              <div className="recipes-features-item">
                <h3>Difficulty</h3>
                <p>{recipeDetails?.difficulty}</p>
              </div>
            )}

            {recipeDetails?.cuisine && (
              <div className="recipes-features-item">
                <h3>Cuisine</h3>
                <p>{recipeDetails?.cuisine}</p>
              </div>
            )}

            {recipeDetails?.caloriesPerServing && (
              <div className="recipes-features-item">
                <h3>Calories Per Serving</h3>
                <p>{recipeDetails?.caloriesPerServing}</p>
              </div>
            )}

            {recipeDetails?.tags && (
              <div className="recipes-features-item">
                <h3>Tags</h3>
                <ul className="ingredients-list">
                  {recipeDetails?.tags?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {recipeDetails?.mealType && (
              <div className="recipes-features-item">
                <h3>Meal Type</h3>
                <ul className="ingredients-list">
                  {recipeDetails?.mealType?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {recipeDetails?.userId && (
              <div className="recipes-features-item">
                <h3>Meal Type</h3>
                <p>{recipeDetails?.userId}</p>
              </div>
            )}
          </div>

          <div className="product-cart-btn">
            <button type="button" className="btn add-cart">
              Add to Cart
            </button>
            <button type="button" className="btn">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails