import React from 'react'
import { Link } from 'react-router-dom';

function RecipesItemListing({ recipeItem, viewChange }) {
  // console.log("recipeItem 008>>", recipeItem.rating);
  

  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`product-listing-wrapper ${
            viewChange ? "product-grid-wrapper" : ""
          }`}
        >
          {recipeItem?.length > 0 &&
            recipeItem.map((item) => {
              if (!item) return null; // skip if undefined

              const { _id, name, image, tags, instructions, cuisine, rating, price } =
                item;

              return (
                <div className="product-listing-item" key={_id}>
                  <figure className="product-image">
                    <Link to={`/recipes/${_id}`}>
                      <img src={image} alt={""} />
                    </Link>
                  </figure>
                  <div className="product-listing-info">
                    <h3>{name}</h3>
                    <div className="description">
                      <h4>Instructions:</h4>
                      {instructions?.length > 0 &&
                        instructions.map((item, index) => (
                          <ul key={index}>
                            <li>{item}</li>
                          </ul>
                        ))}
                    </div>
                    <div className="description tags">
                      <h4>Tags:</h4>
                      <ul>
                        {tags?.length > 0 &&
                          tags.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                      </ul>
                    </div>
                    <div className="cuisine">
                      <h4>
                        Cuisine: <span>{cuisine}</span>
                      </h4>
                    </div>
                    <div className="rating">
                      <h4>
                        Rating: <span>{rating}</span>
                      </h4>
                    </div>
                    <div className="price">
                      <h4>
                        Price: <span>{price}</span>
                      </h4>
                    </div>
                    <Link to={`/recipes/${_id}`} className="btn">
                      More Details
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default RecipesItemListing