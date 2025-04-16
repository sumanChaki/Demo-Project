import React from 'react'
import { Link } from 'react-router-dom';

function RecipesItemListing({ recipeItem, viewChange }) {

  return (
    <div className="row">
      <div className="col-12">
        <div
          className={`product-listing-wrapper ${
            viewChange ? "product-grid-wrapper" : ""
          }`}
        >
          {recipeItem?.length > 0 &&
            recipeItem.map(
              ({ id, name, image, tags, instructions, cuisine, rating }) => (
                <div className={"product-listing-item"} key={id}>
                  <figure className="product-image">
                    <Link to={`/recipes/${id}`}>
                      <img src={image} alt={""} />
                    </Link>
                  </figure>
                  <div className="product-listing-info">
                    <h3>{name}</h3>
                    <div className="description">
                      <h4>Instructions:</h4>
                      {instructions?.length > 0 &&
                        instructions?.map((item, index) => (
                          <ul>
                            <li key={index}>{item}</li>
                          </ul>
                        ))}
                    </div>
                    <div className="description tags">
                      <h4>Tags:</h4>
                      <ul>
                        {tags?.length > 0 &&
                          tags?.map((item, index) => (
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
                      Rating: <span>{rating}</span>
                    </div>

                    <Link to={`/recipes/${id}`} className="btn">
                      More Details
                    </Link>
                  </div>
                </div>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default RecipesItemListing