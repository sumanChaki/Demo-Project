import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { addToCart, apiRequest } from '../../Utility/apiRequest';
import { cartUrl, recipeUrl } from '../../Utility/endPoint';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../Components/Redux/Carts/CartsReducers';


function RecipeDetails() {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [cartDetails, setCartDetails] = useState([]);
  const [isInCart, setIsInCart] = useState(false);

  const user = useSelector((state) => state.auth.user);
  // console.log("user >>", user);

  const dispatch = useDispatch();

  // FETCH ALL RECIPES DETAILS

  const fetchRecipeDetails = async () => {
    try {
      setIsLoading(true);
      const recipeDetails = await apiRequest(
        `${recipeUrl.recipePoint}/${recipeId}`
      );
      setRecipeDetails(recipeDetails);
      // console.log("recipeDetails.recipes >>", recipeDetails.recipes);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  // =========== USER CAN ADD RECIPE ONE TIME

  const recipesInCart = async() => {
    if (!user?.id || !recipeId) return;
    try {
      const res = await apiRequest(`${cartUrl.cartPoint}/user/${user.id}`);
      const recipesInCart = res?.carts?.[0]?.recipes || [];

      const found = recipesInCart.some(
        (item) => String(item.id) === String(recipeId)
      );
      setIsInCart(found)
      
    } catch (error) {
       console.error("Error checking recipe in cart:", error);
    }
  }

useEffect(() => {
  fetchRecipeDetails();
  recipesInCart();
}, [recipeId, user?.id]);

  // ADD TO CART DETAILS

  const addToCartHandler = async () => {
  const payload = {
    userId: user?.id,
    recipes: [
      {
        recipeId: recipeId, 
        quantity: 1,
      },
    ],
  };

    try {
      const allCart = await addToCart(payload);
      console.log("allCart >>", allCart);
      setCartDetails(allCart);
      dispatch(addCart({ userId: allCart.data.userId, recipes: allCart.data.recipes }));
      setIsInCart(true);
      
    } catch (error) {
      console.log("Error adding to cart:", error.message);
    }
  }




  return (
    <div className="container">
      <div className="product-details-wrapper">
        <div className="product-image-wrapper">
          {recipeDetails?.image && (
            <div className="product-details-image">
              <img src={recipeDetails?.image} />
            </div>
          )}
          {user?.id ? (
            <div className="product-cart-btn">
              {isInCart ? (
                <Link className="btn add-cart" to="/cart">
                  Go to Cart
                </Link>
              ) : (
                <Link className="btn add-cart" onClick={addToCartHandler}>
                  Add to Cart
                </Link>
              )}
              <Link className="btn">Buy Now</Link>
            </div>
          ) : (
            <div className="product-cart-btn logout">
              <Link className="btn add-cart">Add to Cart</Link>
              <Link className="btn">Buy Now</Link>
            </div>
          )}
        </div>

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
        </div>
      </div>

      <div className="similar-products-wrapper">
        <h2>Similar products</h2>
        <div className="similar-products">
          <div className="similar-products-item">
            <figure className="similar-products-image">
              <img src="https://placehold.co/600x400/png" />
            </figure>
            <div className="similar-products-content">
              <h4>Product title</h4>
              <h5>
                Price: <span>10000</span>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails