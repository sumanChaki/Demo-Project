import React from 'react';
import { Link } from "react-router-dom";

function ProductsListing({ myProducts, viewChange }) {
  // console.log("myProducts >>", myProducts);
  
  return (
    <div
      className={`product-listing-wrapper ${
        viewChange ? "" : "product-grid-wrapper"
      }`}
    >
      {myProducts?.length > 0 ? (
        myProducts.map(({ id, title, images, description, price }) => (
            <div className="product-listing-item" key={id}>
              <figure className="product-image">
                <Link to={`/products/${id}`}>
                  <img src={images?.[0] || "fallback.jpg"} alt={title} />
                </Link>
              </figure>
              <div className="product-listing-info">
                <h3>{title}</h3>
                <div className="description">
                  <p>{description}</p>
                </div>
                <h4>
                  Price: <span>${price}</span>
                </h4>
                <Link to={`/products/${id}`} className="btn">
                  More Details
                </Link>
              </div>
            </div>
          ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}

export default ProductsListing